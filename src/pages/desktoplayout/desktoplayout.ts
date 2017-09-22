import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';


/**
 * Generated class for the DesktoplayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desktoplayout',
  templateUrl: 'desktoplayout.html',
})
export class DesktoplayoutPage {

 
  root="DesktoplayoutRootPage";
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public poppy: PopoverController) {
  }
  


  presentPopover(myEvent) {
    let popover = this.poppy.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DesktoplayoutPage');
  }


}
