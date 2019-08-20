import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IClient } from '../../../interfaces/client.model';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  componentPath = 'clients';
  backLink = '../list';

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm = this.createCreateForm();
  }

  createCreateForm() {
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

  addClient(clientToAdd: IClient) {
    this.clientService.addClient(clientToAdd)
      .subscribe(() => {
        this.router.navigate([`${this.componentPath}/list`]);
      });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.backLink = '../../prospects/list';
      this.createForm.get('firstName').setValue(params.firstName);
      this.createForm.get('phoneNumber1').setValue(params.phoneNumber1);
      this.createForm.get('initialContactDate').setValue(params.initialContactDate);
      this.createForm.get('initialContactNotes').setValue(params.initialContactNotes);
    });
  }

}
