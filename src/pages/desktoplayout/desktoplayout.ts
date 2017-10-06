import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
  chatRoot1 = "PersoonlijkMenuPage";
  chatRoot2 = "AlgemeenMenuPage";


  constructor(public toastCtrl: ToastController, public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, public poppy: PopoverController) {
  }

  syncRight(tabTitle, newRoot){
    var navs = this.getNavController().getAllChildNavs();
    navs[1].setRoot(newRoot);

    const toast = this.toastCtrl.create({
      message: 'Dit is de tab: ' + tabTitle,
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesktoplayoutPage');
  }

  getNavController(){
    return this.navCtrl;
  }

}
