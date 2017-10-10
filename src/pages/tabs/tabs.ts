import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

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

  root = "InboxenDefaultPage";
  tabRoot0 = "InboxenMenuPage";
  tabRoot1 = "PersoonlijkMenuPage";
  tabRoot2 = "AlgemeenMenuPage";
  tabRoot3 = "SettingsMenuPage";


  constructor(public toastCtrl: ToastController, public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams, public poppy: PopoverController) {
  }

  getNavController() {
    return this.navCtrl;
  }

  setRightScreen(tabTitle, newRoot) {
    var navs = this.getNavController().getAllChildNavs();
    navs[1].setRoot(newRoot);
    
    const toast = this.toastCtrl.create({
      message: 'Dit is de tab: ' + tabTitle,
      duration: 1400,
      position: 'middle'
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
