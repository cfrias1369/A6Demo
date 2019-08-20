import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { IClient } from '../../../interfaces/client.model';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: string;
  client: IClient;
  updateForm: FormGroup;

  componentPath = 'clients';

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.updateForm = this.createEditForm();
  }

  createEditForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: '',
      phoneNumber1: '',
      phoneNumber2: '',
      initialContactDate: '',
      initialContactNotes: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.clientService.getClientById(this.id).subscribe((res) => {
        this.client = res as IClient;
        this.updateForm.get('firstName').setValue(this.client.firstName);
        this.updateForm.get('lastName').setValue(this.client.lastName);
        this.updateForm.get('phoneNumber1').setValue(this.client.phoneNumber1);
        this.updateForm.get('phoneNumber2').setValue(this.client.phoneNumber2);
        this.updateForm.get('initialContactDate').setValue(this.client.initialContactDate);
        this.updateForm.get('initialContactNotes').setValue(this.client.initialContactNotes);
      });
    });
  }

  updateClient(clientToUpdate: IClient) {
    this.clientService.updateClient(this.id, clientToUpdate).subscribe(() => {
      this.snackBar.open('Client updated successfully', 'OK', {
        duration: 3000
      });
      this.router.navigate([`${this.componentPath}/list`]);
    });
  }
}
