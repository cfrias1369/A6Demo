import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { IProspect } from '../../../interfaces/prospect.model';
import { ProspectService } from '../../../services/prospect.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  prospects: IProspect[];
  displayedColumns = ['name', 'phoneNumber', 'initialContactDate', 'initialContactNotes', 'actions'];

  componentPath = 'prospects';

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
    this.router.navigate([`${this.componentPath}/edit/${id}`]);
  }

  deleteProspect(id) {
    this.prospectService.deleteProspect(id)
      .subscribe(() => {
        this.fetchProspects();
      });
  }

  promoteToClient(id) {
    // const clientToAdd: IClient = new Object() as IClient;

    // clientToAdd.firstName = this.prospects.find(() => )

    // this.clientService.addClient(clientToAdd)
    //   .subscribe(() => {
    //     this.router.navigate([`${this.componentPath}/list`]);
    //   });

    let prospect: IProspect;

    prospect = this.prospects.find((p) => {
      if (p._id === id) {
        return p;
      }
    });

    this.router.navigate([`clients/create`], {
      queryParams: {
        firstName: prospect.name,
        phoneNumber1: prospect.phoneNumber,
        initialContactDate: prospect.initialContactDate,
        initialContactNotes: prospect.initialContactNotes
      }
    });
  }
}
