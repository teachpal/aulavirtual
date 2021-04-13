import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
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
