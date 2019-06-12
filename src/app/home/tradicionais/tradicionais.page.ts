import { Component, OnInit } from '@angular/core';
import { pizza } from '../../../../models/pizza';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PizzaService } from '../../services/pizza.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-tradicionais',
  templateUrl: './tradicionais.page.html',
  styleUrls: ['./tradicionais.page.scss'],
})
export class TradicionaisPage implements OnInit {
  
  pizza: pizza = new pizza();
  constructor(private ActivatedRoute:ActivatedRoute,private router:Router,
     private ToastController:ToastController, private PizzaService:PizzaService) { }

  ngOnInit() {
    if (this.ActivatedRoute.snapshot.params['id']) 
      this.PizzaService.buscar(this.ActivatedRoute.snapshot.params['id'])
            .then(pizza => this.pizza = pizza);
    else 
      this.pizza = new pizza();
    }
  adicionar() {
      if (this.pizza.id == null) //Cadastra
        this.PizzaService.cadastrar(this.pizza);
      else //Atualiza
        this.PizzaService.editar(this.pizza);
  
      this.ToastController.create({
        message: 'Adicionado com sucesso',
        duration: 2000
      }).then(toast => toast.present());
  
      this.router.navigateByUrl("/home/tradicionais");
    }
   
  
}
