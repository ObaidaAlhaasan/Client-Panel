import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../../models/client.models';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  clients: ClientModel;
  id: string;
  showBlanceUpdateEdit: Boolean = false;
  constructor(public flash_messages: FlashMessagesService, private router: Router
    , private client_service: ClientService, private acitva_router: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.acitva_router.snapshot.params['id'];
    this.client_service.getClient(this.id).subscribe(client => {
      // tslint:disable-next-line:triple-equals

      this.clients = client;
    });

  }
  onSubmit(data: ClientModel, valide: boolean) {

    if (!valide) {
      this.flash_messages.show('Error ALL Fields required',
        { cssClass: 'alert-danger', timeout: 4000 });
      this.router.navigate(['/edit-client/' + this.id]);
    } else {
      this.client_service.updateClient(this.id, data);
      this.flash_messages.show('Updated  Successfully !',
        { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/client/' + this.id]);
    }
  }

}
