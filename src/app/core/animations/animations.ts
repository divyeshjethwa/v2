/*
 * File: animations.ts
 * Project: v1
 * File Created: Thursday, 27th February 2020 4:05:38 pm
 * Author: Divyesh Jethwa
 * -----
 * Last Modified: Thursday, 27th February 2020 4:09:36 pm
 * Modified By: Divyesh Jethwa <divyesh.jeth@gmail.com>
 * -----
 */

import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { VisibilityState } from "../../core/configs/config";

export const toggle = trigger("toggle", [
  state(
    VisibilityState.Hidden,
    style({ opacity: 0, transform: "translateY(-100%)" })
  ),
  state(
    VisibilityState.Visible,
    style({ opacity: 1, transform: "translateY(0)" })
  ),
  transition("* => *", animate("300ms ease-in"))
]);
