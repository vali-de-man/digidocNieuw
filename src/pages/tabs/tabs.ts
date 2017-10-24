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
