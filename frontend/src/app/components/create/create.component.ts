import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IProspect } from '../../interfaces/prospect.model';
import { ProspectService } from '../../services/prospect.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private prospectService: ProspectService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.createCreateForm();
  }

  createCreateForm() {
    return this.fb.group({
      name: ['', Validators.required],
      phoneNumber: '',
      initialContactNotess: '',
      initialContactDate: ''
    });
  }

  addProspect(prospectToAdd: IProspect) {
    this.prospectService.addProspect(prospectToAdd)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }

  ngOnInit() {
  }

}
