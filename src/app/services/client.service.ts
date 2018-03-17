import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { ClientModel } from '../models/client.models';
@Injectable()
export class ClientService {
  _clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;
  constructor(public _AngularF: AngularFireDatabase) {
    this._clients = _AngularF.list('/clients') as FirebaseListObservable<ClientModel[]>;
  }

  getClients() {
    return this._clients;
  }
}
