import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  showFormFields = false;
  showModes = false;
  neverShow = false;
  public showFields() {
    this.showFormFields = true;
    this.showModes = true;
  }
}

