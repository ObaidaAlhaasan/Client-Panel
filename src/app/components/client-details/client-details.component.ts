import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientModel } from '../../models/client.models';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: ClientModel;
  hasBalance: Boolean = false;
  showBlanceUpdateInput: Boolean = false;

  constructor(
    private client_service: ClientService, private router: Router
    , private acitve_route: ActivatedRoute, private flash_messages: FlashMessagesService) { }

  ngOnInit() {
    this.id = this.acitve_route.snapshot.params['id'];
    this.client_service.getClient(this.id).subscribe(client => {
      // tslint:disable-next-line:triple-equals
      if (client.balance != 0) {
        this.hasBalance = true;
      }
      this.client = client;
    });
  }
  onDeleteClick(id: string) {
    if (confirm('Are You Sure To Delete This Client ?')) {
      this.client_service.deleteClient(this.id);
      this.flash_messages.show('Client Deleted', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/']);
    }
  }
  updateBalance(id: string) {
    this.client_service.updateClient(this.id, this.client);
    this.flash_messages.show('Client Updated', { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/client/' + this.id]);
  }
}
