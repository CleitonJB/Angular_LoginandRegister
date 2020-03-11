import { Component, OnInit } from '@angular/core';
//meus imports
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = 
  {
    OPER_seq_oper: null,
    OPER_login: null,
    OPER_senha: null,
    OPER_nome_operador: null,
    cod_oper_inc: 0,
    dat_inclusao: null,
    cod_oper_alt: 0,
    dat_alteracao: null,
  } as User;
  

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm.OPER_seq_oper = null;
    this.registerForm.OPER_login = '';
    this.registerForm.OPER_senha = '';
    this.registerForm.OPER_nome_operador = '';
    this.registerForm.cod_oper_inc = 0;
    this.registerForm.dat_inclusao = null;
    this.registerForm.cod_oper_alt = 0;
    this.registerForm.dat_alteracao = null;
  }

  register(){
    //console.log(this.registerForm);
    this.authService.register(this.registerForm)
      .subscribe((res) => {
        console.log('Res: ', res);
        if(res == 'ok'){
          this.router.navigate(['/login']);
        }
      }
    );
  }

}
