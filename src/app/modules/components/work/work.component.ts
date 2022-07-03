import { workData } from './../../../core/configs/config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  projectDetails: any;
  constructor() {
    this.projectDetails = workData;
  }

  ngOnInit() {
    console.log(this.projectDetails);
  }
}
