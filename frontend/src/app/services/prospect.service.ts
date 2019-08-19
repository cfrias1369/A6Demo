import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  uri = 'http://localhost:4001';

  constructor(private http: HttpClient) { }

  getProspects() {
    return this.http.get(`${this.uri}/prospects`);
  }

  getProspectById(id: string) {
    return this.http.get(`${this.uri}/prospects/${id}`);
  }

  addProspect(prospectToAdd: {name, phoneNumber, initialContactDate, initialContactNotes}) {
    const prospect = {
      name: prospectToAdd.name,
      phoneNumber: prospectToAdd.phoneNumber,
      initialContactDate: prospectToAdd.initialContactDate,
      initialContactNotes: prospectToAdd.initialContactNotes
    };

    return this.http.post(`${this.uri}/prospects/add`, prospect);
  }

  updateProspect(id: string, prospectToUpdate: {name, phoneNumber, initialContactDate, initialContactNotes}) {
    const prospect = {
      name: prospectToUpdate.name,
      phoneNumber: prospectToUpdate.phoneNumber,
      initialContactDate: prospectToUpdate.initialContactDate,
      initialContactNotes: prospectToUpdate.initialContactNotes
    };

    return this.http.post(`${this.uri}/prospects/update/${id}`, prospect);
  }

  deleteProspect(id) {
    return this.http.get(`${this.uri}/prospects/delete/${id}`);
  }
}
