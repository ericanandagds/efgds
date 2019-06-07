import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import {AutenticacaoGuard} from '../guard/autenticacao.guard';
import { MenuController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { async } from '@angular/core/testing';

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
    });
  }
async clicou(){

  let email = this.formulario.get('email').value;
  let senha = this.formulario.get('senha').value;
  firebase.auth().signInWithEmailAndPassword(email, senha).then((usuario) => {
    this.route.navigateByUrl('home');
  }).catch(erro => {
    this.errorAutenticacao(erro.code);
  })
}
async cadastrar(){
  const alert = await this.alertController.create({
    header: 'Nova Conta',
    inputs:[
      {type:"email",placeholder:"Digite um email",name:"login"},
      {type:"password",placeholder:"Digite sua senha", name:"senha"}
    ],
    buttons:[
      'Cancelar',
      {text:"Cadastrar",handler:(data) =>{
        firebase.auth().createUserWithEmailAndPassword(data.login,data.senha).then((usuario)=>{
          this.route.navigateByUrl('home');        
        }).catch(erro=> {
          this.errorAutenticacao(erro.code);
          })
        }}     
      ]
  })};
 async errorAutenticacao(codigo) {
  let error = "Email ou senha inválida";

  switch(codigo) {
    case 'auth/email-already-in-use': error='Email já está em uso'; break;
    case 'auth/invalid-email': error='Email inválido'; break;
    case 'auth/weak-password': error = 'Senha com menos de 6 caracteres'; break;
    case 'auth/timeout': error='Time out no servidor  '; break;
    case 'auth/user-not-found': error='Email não cadastrado'; break;
  
  }

  const toast = await this.ToastController.create({
    message: error,
    duration: 2000
  });
  toast.present();
}
}
