import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProspect } from '../interfaces/prospect.model';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  //uri = 'http://localhost:4001';
  uri = 'https://localhost:44383/api';

  constructor(private http: HttpClient) { }

  getProspects() {
    return this.http.get(`${this.uri}/prospects`);
  }

  getProspectById(id: string) {
    return this.http.get(`${this.uri}/prospects/${id}`);
  }

  addProspect(prospectToAdd: IProspect) {
    const prospect = {
      name: prospectToAdd.name,
      phoneNumber: prospectToAdd.phoneNumber,
      initialContactDate: prospectToAdd.initialContactDate,
      initialContactNotes: prospectToAdd.initialContactNotes
    };

    // return this.http.post(`${this.uri}/prospects/add`, prospect);
    return this.http.post(`${this.uri}/prospects`, prospect);
  }

  updateProspect(id: string, prospectToUpdate: IProspect) {
    const prospect = {
      id,
      name: prospectToUpdate.name,
      phoneNumber: prospectToUpdate.phoneNumber,
      initialContactDate: prospectToUpdate.initialContactDate,
      initialContactNotes: prospectToUpdate.initialContactNotes
    };

    // return this.http.post(`${this.uri}/prospects/update/${id}`, prospect);
    return this.http.put(`${this.uri}/prospects/${id}`, prospect);
  }

  deleteProspect(id) {
    // return this.http.get(`${this.uri}/prospects/delete/${id}`);
    return this.http.delete(`${this.uri}/prospects/${id}`);
  }
}
