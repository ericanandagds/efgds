import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import {AutenticacaoGuard} from '../guard/autenticacao.guard';
import { MenuController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  msg;
  formulario: FormGroup;
 
  constructor(private formBuilder:FormBuilder,private route:Router,private menuCtrl:MenuController, private ToastController: ToastController, private alertController:AlertController, private storage:Storage) { }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }
 
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    })
  }
async clicou(){
  let email = this.formulario.get('email').value;
  let senha = this.formulario.get('senha').value;
  firebase.auth()
  if (this.formulario.valid &&
      this.formulario.get('email').value == "teste@teste.com" &&
      this.formulario.get('senha').value == "123456"){
        AutenticacaoGuard.podeAcessar = true;
      } else
      this.msg = "Email ou senha incorreta"; 
    }


}
