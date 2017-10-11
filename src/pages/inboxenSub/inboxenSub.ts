import { TabsPage } from './../tabs/tabs';
import { Functions } from './../../providers/functions/functions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inboxenSub',
  templateUrl: 'inboxenSub.html',
})
export class InboxenSubPage {

  headerRow = [
    '#',
    'Onderwerp',
    'Werkmapnummer',
    'Ontvangstdatum'
  ]

  nummers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(private tabs: TabsPage, private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
  this.functions.logout();
  }

  push(pageToPush){
    var navs = this.tabs.getNavController().getAllChildNavs();
    navs[1].push(pageToPush);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenSubPage');
  }

}
