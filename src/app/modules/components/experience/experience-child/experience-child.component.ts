import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'exp-child',
  templateUrl: './experience-child.component.html',
  styleUrls: ['./experience-child.component.scss'],
})
export class ExperienceChildComponent implements OnInit {
  @Input() exp: any;
  expData = [
    {
      name: 'CSG International',
      time: '2018-2022',
      desc: 'Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
    },
    {
      name: 'Altorum leren',
      time: '2018-2022',
      desc: 'Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
    },
    {
      name: 'Mystro',
      time: '2018-2022',
      desc: 'Anim in voluptate ut quis consequat elit non Lorem labore fugiat nostrud consequat culpa amet. Consectetur dolore aliqua elit nostrud est qui. Aliquip anim consectetur anim et quis fugiat voluptate non. Proident nostrud eu ut ut ad.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
