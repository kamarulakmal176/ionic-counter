import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  counter:number = 0
  message:string = ""

  constructor(private alertCtrl:AlertController) {}

  incrementPressed() {
    this.message = ""
    this.counter++
  }

  decrementPressed() {
    if (this.counter == 1) {
      this.message="Number cannot less than 0"
    }
    this.counter--;
  }

  resetPressed() {
    this.counter = 0
  }

}
