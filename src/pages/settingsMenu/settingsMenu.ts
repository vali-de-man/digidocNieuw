import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settingsMenu',
  templateUrl: 'settingsMenu.html',
})
export class SettingsMenuPage {

  constructor(private tabs: TabsPage, public navCtrl: NavController, public navParams: NavParams) {
  }

  push(pageToPush) {
    var navs = this.tabs.getNavController().getAllChildNavs();
    navs[1].push(pageToPush);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsMenuPage');
  }

}
