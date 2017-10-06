import { DesktoplayoutPage } from './../desktoplayout/desktoplayout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlgemeenMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-algemeen-menu',
  templateUrl: 'algemeen-menu.html',
})
export class AlgemeenMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private desktopLayoutpage: DesktoplayoutPage) {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  goTo(){
    var navs = this.desktopLayoutpage.getNavController().getAllChildNavs();
    navs[1].push('GridlayoutPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlgemeenMenuPage');
  }

}
