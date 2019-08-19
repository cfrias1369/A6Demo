import { Component, OnInit } from '@angular/core';
import { ProspectService } from '../../services/prospect.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private prospectService: ProspectService) { }

  ngOnInit() {
  }

}
