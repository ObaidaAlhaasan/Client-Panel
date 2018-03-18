import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//  angular2-messages
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';

//  AngularFire  Imports

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
//  add you r firebase config
};

//  Component imports

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//  Services Import
import { ClientService } from './services/client.service';
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuard } from './guards/auth-guards';
import { RegisterGuard } from './guards/register-guard';

import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireAuth, FlashMessagesService,
    AuthServiceService, AngularFireDatabase, ClientService,
    AuthGuard, SettingsService, RegisterGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
