import { Component, OnInit } from '@angular/core';
import { expData } from '@configs/config';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  currentTab: any;
  tabs = expData;
  constructor() {}

  ngOnInit() {
    this.currentTab = this.tabs.find((tab) => tab.isClicked);
  }

  openDetails(tab: any) {
    this.currentTab = tab;
    for (let tab of this.tabs) {
      tab.isClicked = false;
    }

    tab.isClicked = true;
  }
}
