import { contactmeData } from "./../../../core/configs/config";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  data = contactmeData;
  constructor() {}

  ngOnInit() {}
}
