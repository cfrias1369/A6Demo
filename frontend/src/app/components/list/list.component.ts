import { Component, OnInit } from '@angular/core';
import { ProspectService } from '../../services/prospect.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private prospectService: ProspectService) { }

  ngOnInit() {
    this.prospectService.getProspects().subscribe((prospects) => {
      console.log(prospects);
    });
  }

}
