import { Component, OnInit } from "@angular/core";
import { aboutmeData } from "../../../core/configs/config";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  data = aboutmeData;
  constructor() {}

  ngOnInit() {}
}
