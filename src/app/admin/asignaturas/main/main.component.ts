import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from "@angular/material/stepper";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  @ViewChild("stepper") stepper: MatStepper;
  isLinear = true;


  constructor() { }

  ngOnInit(): void {
  }

}
