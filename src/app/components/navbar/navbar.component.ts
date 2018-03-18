import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import 'rxjs/add/operator/map';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  LoggedInUser: string;
  showRegister: boolean;
  constructor(public flash: FlashMessagesService, private router: Router
    , private auth_service: AuthServiceService, private settings_service: SettingsService) { }

  ngOnInit() {
    this.auth_service.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.LoggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.showRegister = this.settings_service.getSettings().allowRegistration;
  }

  Logout() {
    if (confirm('Are You Sure ?')) {
      this.auth_service.logout();
      this.flash.show('You are Logged Out !', { cssClass: 'alert-info', timeout: 3000 });
      this.router.navigate(['/login']);
    }
  }
}
