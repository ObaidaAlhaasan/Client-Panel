import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientModel } from '../../models/client.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth_service: AuthServiceService, public flash_messages: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.auth_service.login(email, password).then((result) => {
      this.router.navigate(['/']);
      this.flash_messages.show('Welcome Back ', {
        cssClass: 'alert-success', timeout: 4000
      });
    }).catch(error => {
      this.router.navigate(['/login']);
      this.flash_messages.show(error.message, {
        cssClass: 'alert-danger', timeout: 6000
      });
    });

  }
}
