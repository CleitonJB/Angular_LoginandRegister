import { Component, OnInit } from '@angular/core';
//meus imports
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      OPER_login: ['', Validators.required],
      OPER_senha: ['', Validators.required]
    });
  }

  login(){
    this.authService.login(this.loginForm.value)
      .subscribe((res) => {
        if(res !== "eof"){
          console.log('foi');
          this.loginForm.reset();
          this.router.navigate(['/']);
        }else{
         alert('Erro ao logar!');
        }
      });
  }

}
