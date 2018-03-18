import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { ClientModel } from '../models/client.models';
@Injectable()
export class ClientService {
  _clients: FirebaseListObservable<any[]>;

  client_Observable: FirebaseObjectObservable<any>;

  constructor(public Angular_F_db: AngularFireDatabase) {
    this._clients = Angular_F_db.list('/clients') as FirebaseListObservable<ClientModel[]>;
  }
  getClients(): Observable<any> {
    return this._clients;
  }
  newClient(data: ClientModel) {
    // this.Angular_F_db.database()
    this._clients.push(data);
  }
  getClient(id: string): Observable<any> {
    this.client_Observable = this.Angular_F_db.object('/clients/' + id) as FirebaseObjectObservable<ClientModel>;
    return this.client_Observable;
  }
  updateClient(id: string, client: ClientModel) {
    this._clients.update(id, client);
  }
  deleteClient(id: string) {
    this._clients.remove(id);
  }
}
