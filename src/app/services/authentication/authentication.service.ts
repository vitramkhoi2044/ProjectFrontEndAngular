import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { SharingService } from '../sharing/sharing.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth, private router: Router, private dataSharingService: SharingService) {
  }
  async signinGmail() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return await this.afAuth.signInWithPopup(provider)
      .then(res => {
        console.log(" da dang nhap thanh cong")
        this.dataSharingService.isUserLoggedIn.next(true);
      })
  }

  //Tương tự viết hàm signin với tài khoản firebase như sau:
  signinFirebase(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
          this.dataSharingService.isUserLoggedIn.next(true);
        }, err => reject(err))
    })
  }

  signupFirebase(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
        
      },  err => reject(err));
    });
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      if (this.afAuth.user) {
        this.afAuth.signOut();
        this.dataSharingService.isUserLoggedIn.next(false);
        resolve("log out");
      } else {
        reject();
      }
    })
  }

}
