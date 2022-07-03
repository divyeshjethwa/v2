import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'work-child',
  templateUrl: './work-child.component.html',
  styleUrls: ['./work-child.component.scss'],
})
export class WorkChildComponent implements OnInit {
  @Input() project: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.project);
  }
}
