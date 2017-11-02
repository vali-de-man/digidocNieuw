import { InboxenSubPage } from './../inboxenSub/inboxenSub';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-inboxenMenu',
  templateUrl: 'inboxenMenu.html',
})
export class InboxenMenuPage {
  items = [
    'Groepsinbox NED/EEN',
    'Groepsinbox NED/TWEE',
    'Groepsinbox NED/DRIE',
    'Groepsinbox NED',
    'Groepsinbox ARG/UN',
    'Groepsinbox ARG/DOS',
    'Groepsinbox DEU/EINS',
    'Groepsinbox DEU/ZWEI',
    'PERSOONLIJKE INBOX'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private tabs: TabsPage) {
  }

  push(item) {
    var navs = this.tabs.getNavController().getAllChildNavs();
    navs[1].push('InboxenSubPage',{titleParam: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenMenuPage');
  }

}
