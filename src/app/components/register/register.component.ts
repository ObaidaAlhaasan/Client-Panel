import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, public flash_message: FlashMessagesService, private auth_service: AuthServiceService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.auth_service.createUser(email, pass).then(() => {
      this.flash_message.show('You registered successfully congratz ', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/login']);
    }).catch(err => {
      this.flash_message.show(err.message, { cssClass: 'alert-danger', timeout: 6000 });
      this.router.navigate(['/register']);
    });
  }
}
