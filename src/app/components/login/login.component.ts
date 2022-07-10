import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthenticationService,private router: Router,) {}

  ngOnInit(): void {
  }

  login() {
    let email: string = String((document.getElementById('email') as HTMLInputElement).value);
    let password: string = String((document.getElementById('password') as HTMLInputElement).value);
    this.authService.signinFirebase(email, password)
    .then(res =>{
      this.router.navigate(["home/dashboard"]);
    })
    .catch(err =>{
      (document.getElementById('notification') as HTMLInputElement).innerHTML = `
      <hr class="solid mt-4"/>
      <p>`+err.message.slice(9)+`</p> 
      `;
      (<HTMLInputElement> document.getElementById("btn-login")).disabled = false;
    });
  }

  loginGoogle() {
    this.authService.signinGmail()
     .then(res=>{
        this.router.navigate(["home/dashboard"]);
       }).catch(err=>{
         console.log(err); 
        
       })
  }
  pressEnterLogin(){
    let input = document.getElementById("password");
    input?.addEventListener("keypress",function(event){
      if(event.key === "Enter"){
        document.getElementById("btn-login")?.click();
        (<HTMLInputElement> document.getElementById("btn-login")).disabled = true;
      }
    })
  }
}
