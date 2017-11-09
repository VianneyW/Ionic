import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  focus: boolean
  constructor(public navCtrl: NavController) {

  }

  addFocusClass(item) {

  }
}
