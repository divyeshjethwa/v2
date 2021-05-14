import { Component, OnInit } from "@angular/core";
import { introData } from "../../../core/configs/config";
@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"]
})
export class IntroComponent implements OnInit {
  data = introData;
  constructor() {}

  ngOnInit() {}
}
