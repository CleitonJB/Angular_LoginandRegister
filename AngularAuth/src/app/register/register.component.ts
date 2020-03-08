import { Component, OnInit } from '@angular/core';
//meus imports
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      OPER_login: ['', Validators.required],
      OPER_senha: ['', Validators.required]
    });
  }

  register(){
    this.authService.register(this.registerForm.value)
      .subscribe((res) => {
        if(res == 'ok'){
          this.router.navigate(['/login']);
        }
      }
    );
  }

}
