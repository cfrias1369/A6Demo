import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { IProspect } from '../../interfaces/prospect.model';
import { ProspectService } from '../../services/prospect.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: string;
  prospect: IProspect;
  updateForm: FormGroup;

  constructor(
    private prospectService: ProspectService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.updateForm = this.createEditForm();
  }

  createEditForm() {
    return this.fb.group({
      name: ['', Validators.required],
      phoneNumber: '',
      initialContactDate: '',
      initialContactNotes: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.prospectService.getProspectById(this.id).subscribe((res) => {
        this.prospect = res as IProspect;
        this.updateForm.get('name').setValue(this.prospect.name);
        this.updateForm.get('phoneNumber').setValue(this.prospect.phoneNumber);
        this.updateForm.get('initialContactDate').setValue(this.prospect.initialContactDate);
        this.updateForm.get('initialContactNotes').setValue(this.prospect.initialContactNotes);
      });
    });
  }

  updateProspect(prospectToUpdate: IProspect) {
    this.prospectService.updateProspect(this.id, prospectToUpdate).subscribe(() => {
      this.snackBar.open('Prospect updated successfully', 'OK', {
        duration: 3000
      });
    });
  }
}
