import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IClient } from '../interfaces/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  uri = 'http://localhost:4001';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${this.uri}/clients`);
  }

  getClientById(id: string) {
    return this.http.get(`${this.uri}/clients/${id}`);
  }

  addClient(clientToAdd: IClient) {
    const client = {
      firstName: clientToAdd.firstName,
      lastName: clientToAdd.lastName,
      phoneNumber1: clientToAdd.phoneNumber1,
      initialContactDate: clientToAdd.initialContactDate,
      initialContactNotes: clientToAdd.initialContactNotes
    };

    return this.http.post(`${this.uri}/clients/add`, client);
  }

  updateClient(id: string, clientToUpdate: IClient) {
    const client = {
      firstName: clientToUpdate.firstName,
      lastName: clientToUpdate.lastName,
      phoneNumber1: clientToUpdate.phoneNumber1,
      initialContactDate: clientToUpdate.initialContactDate,
      initialContactNotes: clientToUpdate.initialContactNotes
    };

    return this.http.post(`${this.uri}/clients/update/${id}`, client);
  }

  deleteClient(id) {
    return this.http.get(`${this.uri}/clients/delete/${id}`);
  }
}
