import { navigationLinks } from './core/configs/config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Divyesh Jethwa';
  navArr = navigationLinks;
  ngOnInit(): void {
    document.addEventListener('animationend', () => {
      const preloader = document.querySelector('.preloader')!;
      setTimeout(() => {
        preloader.classList.add('preloader-finish');
      }, 2000);
    });
  }

  public customEasing = (
    t: number,
    b: number,
    c: number,
    d: number
  ): number => {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    }
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  };
}
