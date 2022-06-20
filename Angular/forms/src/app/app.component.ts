import { Component } from '@angular/core';
import { Usuarios } from './models/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Usuarios = {
  aceitaTermosDeCondicao: true,
  email: '',
  genero:'',
  nome: '',
  senha: '',
  username:''
  }
}
