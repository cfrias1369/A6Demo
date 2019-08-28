import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // readonly API_URI = 'http://localhost:4001'; // This will connect to the nodeJS Web API
  // readonly API_URI = 'https://localhost:44383/api'; // This will connect to the .Net Web API
  // readonly API_URI = 'http://localhost:8080/api'; // This will connect to the .Net Web API
  // readonly API_URI = 'https://localhost:44307/api'; // This will connect to the .Net Web API
  // readonly API_URI = 'https://corewebapp20190827124747.azurewebsites.net/api'; // This will connect to the .Net Core Web API in Azure
  readonly API_URI = 'https://webapi20190827012025.azurewebsites.net/api'; // This will connect to the .Net Web API in Azure

  constructor() { }
}
