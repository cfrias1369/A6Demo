import { Component, OnInit } from '@angular/core';
import { ProspectService } from '../../services/prospect.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private prospectService: ProspectService) { }

  ngOnInit() {
  }

}
