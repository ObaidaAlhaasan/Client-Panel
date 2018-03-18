import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';
import { SettingsModel } from '../../models/service.models';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: SettingsModel;
  constructor(private router: Router, public flash_message: FlashMessagesService, private settings_service: SettingsService) { }

  ngOnInit() {
    this.settings = this.settings_service.getSettings();
  }
  onSubmit() {
    this.settings_service.changeSettings(this.settings);
    this.flash_message.show('Settings Saved', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/settings']);
  }
}
