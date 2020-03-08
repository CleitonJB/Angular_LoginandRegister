import { Injectable } from '@angular/core';
//meus imports
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  rgUrl = "http://vcmobile.com.br/VictorProjetoEstagio/Hackathon/WebApi/V01/Operadores_Incluir_Post";
  lgUrl = "http://vcmobile.com.br/VictorProjetoEstagio/Hackathon/WebApi/V01/Operadores_ValidarLogin_Post";

  constructor(private http: HttpClient) { }

  register(usuario){
    return this.http.post<any>(this.rgUrl, usuario);
  }

  login(usuario){
    return this.http.post<any>(this.lgUrl, usuario, {headers: this.headers});
  }
}
