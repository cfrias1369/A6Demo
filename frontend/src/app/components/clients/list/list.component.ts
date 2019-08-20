import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { IClient } from '../../../interfaces/client.model';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clients: IClient[];
  displayedColumns = ['firstName', 'lastName', 'phoneNumber1', 'initialContactDate', 'initialContactNotes', 'actions'];

  componentPath = 'clients';

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients() {
    this.clientService
      .getClients()
      .subscribe((data: IClient[]) => {
        this.clients = data;
        console.log('Data requested');
        console.log(this.clients);
      });
  }

  editClient(id) {
    this.router.navigate([`${this.componentPath}/edit/${id}`]);
  }

  deleteClient(id) {
    this.clientService.deleteClient(id)
      .subscribe(() => {
        this.fetchClients();
      });
  }
}
