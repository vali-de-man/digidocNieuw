import { DesktoplayoutPage } from './../desktoplayout/desktoplayout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersoonlijkMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-persoonlijk-menu',
  templateUrl: 'persoonlijk-menu.html',
})
export class PersoonlijkMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private desktopLayoutpage: DesktoplayoutPage) {
  }

  goTo(){
    var navs = this.desktopLayoutpage.getNavController().getAllChildNavs();
    navs[1].push('HeaderPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersoonlijkMenuPage');
  }

}
