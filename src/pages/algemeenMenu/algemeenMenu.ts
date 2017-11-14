import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-algemeenMenu',
  templateUrl: 'algemeenMenu.html',
})
export class AlgemeenMenuPage {

  constructor(public menuCtrl: MenuController, private tabs: TabsPage, public navCtrl: NavController, public navParams: NavParams) {
  }

  push(pageToPush) {
    var navs = this.tabs.getNavController().getAllChildNavs();
    navs[1].push(pageToPush);
  }
  
  closeMenu(){
    this.menuCtrl.close();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlgemeenMenuPage');
  }

}
