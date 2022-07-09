import { SharingService } from './../../services/sharing/sharing.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user/user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  displayName: string = "";

  constructor(private userService: UserService, private sharingService: SharingService) {

    this.sharingService.isUserLoggedIn
      .subscribe(value => {
        if (value) {
          this.userService.getCurrentUser()
            .then(user => {
              this.displayName = user.displayName != null ? user.displayName : user.email
              console.log(this.displayName);
            }
            ).catch(e => { console.log(e); }
            );
        }
        else{
          this.displayName = '';
        }
      })
  }

  ngOnInit(): void {
  }

}
