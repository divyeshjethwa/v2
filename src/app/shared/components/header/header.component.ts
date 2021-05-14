import { navigationLinks } from './../../../core/configs/config';
import { toggle } from './../../../core/animations/animations';
import {
  Component,
  OnInit,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  throttleTime,
  map,
  pairwise,
  share,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { VisibilityState, Direction } from '../../../core/configs/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [toggle],
})
export class HeaderComponent implements OnInit {
  @Output() toggler: EventEmitter<any> = new EventEmitter();
  private isVisible = true;
  navArr = navigationLinks;

  constructor() {}

  ngOnInit() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop()!;
      if (scroll > 0) {
        $('#header').addClass('active');
      } else {
        $('#header').removeClass('active');
      }
    });
  }
  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  emitTogglerEvent() {
    this.toggler.emit(null);
  }

  reloadPage() {
    window.location.reload();
  }

  ngAfterViewInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter((direction) => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter((direction) => direction === Direction.Down)
    );
    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown$.subscribe(() => (this.isVisible = false));
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
