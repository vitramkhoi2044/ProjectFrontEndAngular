import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  insertForm: FormGroup;
  flagEmail: boolean = false;
  flagPassword: boolean = false;
  flagRePassword: boolean = false;

  constructor(public authService: AuthenticationService, private router: Router, private fb: FormBuilder) {
    this.insertForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  Register() {
    let email: string = String(this.insertForm.controls["email"].value);
    let password: string = String(this.insertForm.controls["password"].value);
    let rePassword: string = String(this.insertForm.controls["rePassword"].value);
    (document.getElementById('notification') as HTMLInputElement).innerHTML = "";
    this.checkEmail(email);
    this.checkPassword(password);
    this.checkRePassword(password, rePassword);
    if (this.flagEmail == true && this.flagPassword == true && this.flagRePassword == true) {
      this.authService.signupFirebase(email, password)
        .then(res => {
          this.router.navigate(['login'])
        })
        .catch(err => {
          (document.getElementById('notification') as HTMLInputElement).innerHTML += `
      <hr class="solid mt-4"/>
      <p>`+ err.message.slice(9) + `</p> 
      `;
        });
    }
  }

  checkEmail(email: string) {
    let letter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!letter.test(email)) {
      this.flagEmail = false;
      (document.getElementById('email') as HTMLInputElement).style.backgroundColor = 'yellow';
      (document.getElementById('notification') as HTMLInputElement).innerHTML += "Invalid email. (Example@gmail.com) <br/>"
    }
    else {
      this.flagEmail = true;
      (document.getElementById('email') as HTMLInputElement).style.backgroundColor = 'white';
    }
  }

  checkPassword(password: string) {
    if (password.length <= 9) {
      this.flagPassword = false;
      (document.getElementById('password') as HTMLInputElement).style.backgroundColor = 'yellow';
      (document.getElementById('password') as HTMLInputElement).value = '';
      (document.getElementById('re-password') as HTMLInputElement).value = '';
      (document.getElementById('notification') as HTMLInputElement).innerHTML += "Password must be more than 10 characters <br/>";
    }
    else {
      this.flagPassword = true;
      (document.getElementById('password') as HTMLInputElement).style.backgroundColor = 'white';
    }
  }
  checkRePassword(password: string, rePassword: string) {
    if (rePassword !== password) {
      this.flagRePassword = false;
      (document.getElementById('re-password') as HTMLInputElement).style.backgroundColor = 'yellow';
      (document.getElementById('re-password') as HTMLInputElement).value = '';
      (document.getElementById('notification') as HTMLInputElement).innerHTML += "Re-password does not match the password <br/>";
    }
    else {
      this.flagRePassword = true;
      (document.getElementById('re-password') as HTMLInputElement).style.backgroundColor = 'white';
    }
  }

}
