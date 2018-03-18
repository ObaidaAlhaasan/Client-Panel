import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ClientModel } from '../../models/client.models';
import { Observable } from 'rxjs/observable';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  check: Boolean = false;
  clients: ClientModel[];
  errs: string;
  totalCurrency: number;
  constructor(public clientservice: ClientService) { }

  ngOnInit() {
    this.clientservice.getClients().subscribe((data) => {
      this.clients = data;
      this.check = true;
      this.getTotalballance();
    }, (error: any) => {
      console.log(error);
      this.errs = error.message;
    });
  }

  getTotalballance() {
    let total = 0;
    if (this.clients) {

      for (let i = 0; i < this.clients.length; i++) {
        const element = this.clients[i];
        total += parseFloat(element.balance);
      }
      this.totalCurrency = total;
    }
  }
}
