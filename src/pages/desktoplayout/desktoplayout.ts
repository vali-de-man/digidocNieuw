import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {MenuController} from 'ionic-angular';

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

  items = [
    'Groepsinbox NED/EEN (3)',
    'Groepsinbox NED/TWEE (7)',
    'Groepsinbox NED/DRIE (0)',
    'Groepsinbox NED (null)',
    'Groepsinbox ARG/UN (1392)',
    'Groepsinbox ARG/DOS (54)',
    'Groepsinbox DEU/EINS (1)',
    'Groepsinbox DEU/ZWEI (1)',
    'PERSOONLIJKE INBOX (1440)'
  ];
 

  root="DesktoplayoutRootPage";
  chatRoot0 = "InboxenPage";
  chatRoot1 = "PersoonlijkPage";
  chatRoot2 = "AlgemeenPage";


  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, public poppy: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesktoplayoutPage');
  }

  getNavController(){
    return this.navCtrl;
  }

}
