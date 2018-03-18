import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../../models/client.models';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  disableBallance: boolean;
  clients: ClientModel = {
    balance: '0',
    phone: '',
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(public flash_messages: FlashMessagesService, private router: Router
    , private client_service: ClientService, private settings_service: SettingsService) { }

  ngOnInit() {
    this.disableBallance = this.settings_service.getSettings().disableBalanceOnAdd;
  }

  onSubmit(data: ClientModel, valide: boolean) {
    if (this.disableBallance) {
      data.balance = '0';
    }
    if (!valide) {
      this.flash_messages.show('Error ALL Fields required',
        { cssClass: 'alert-danger', timeout: 4000 });
      this.router.navigate(['/addClient']);
    } else {
      this.client_service.newClient(data);
      this.flash_messages.show('Client Added Successfully !',
        { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/']);
    }
  }
}
