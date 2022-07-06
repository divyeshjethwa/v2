import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  currentTab: any;
  tabs = [
    {
      name: 'CSG International',
      position: 'Software Engineer',
      isClicked: true,
      time: 'May 2020 - June 2022',
      content: [
        '  CSG International Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
        '  CSG International Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
        '  CSG International Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
      ],
    },
    {
      name: 'Altorum leren',
      position: 'Web Developer',
      isClicked: false,
      time: 'Jan 2019 - Feb 2020',
      content: [
        ' Altorum leren Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
        ' Altorum leren Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
        ' Altorum leren Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
      ],
    },
    {
      name: 'Mystro',
      position: 'Application Development Intern',
      time: 'Jul 2018 - Dec 2018',
      isClicked: false,
      content: [
        ' Mystro Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
        ' Mystro Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
        ' Mystro Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
      ],
    },
  ];
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
