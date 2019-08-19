import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { IProspect } from '../../interfaces/prospect.model';
import { ProspectService } from '../../services/prospect.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  prospects: IProspect[];
  displayedColumns = ['name', 'phoneNumber', 'initialContactDate', 'initialContactNotes', 'actions'];

  constructor(
    private prospectService: ProspectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchProspects();
  }

  fetchProspects() {
    this.prospectService
      .getProspects()
      .subscribe((data: IProspect[]) => {
        this.prospects = data;
        console.log('Data requested');
        console.log(this.prospects);
      });
  }

  editProspect(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteProspect(id) {
    this.prospectService.deleteProspect(id)
      .subscribe(() => {
        this.fetchProspects();
      });
  }
}
