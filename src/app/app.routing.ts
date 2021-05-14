/*
 * File: app.routing.ts
 * Project: v1
 * File Created: Sunday, 26th January 2020 6:09:33 pm
 * Author: Divyesh Jethwa
 * -----
 * Last Modified: Thursday, 6th February 2020 12:37:33 am
 * Modified By: Divyesh Jethwa <divyesh.jeth@gmail.com>
 * -----
 */

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
