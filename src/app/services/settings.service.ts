import { Injectable } from '@angular/core';
import { SettingsModel } from '../models/service.models';

@Injectable()
export class SettingsService {
  settings: SettingsModel = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  };
  constructor() {
    if (localStorage.getItem('settings') != null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings() {
    return this.settings;
  }
  changeSettings(settings: SettingsModel) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
