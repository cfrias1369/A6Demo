import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  readonly API_URI = 'http://localhost:4001'; // This will connect to the nodeJS Web API
  // readonly API_URI = 'https://localhost:44383/api'; // This will connect to the .Net Web API

  constructor() { }
}
