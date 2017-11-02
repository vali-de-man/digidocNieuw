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
  public title;
  public onderwerp;
  public isDisabled = true;

  constructor(private tabs: TabsPage, private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get("titleParam");
  }

  logout(){
  this.functions.logout();
  }

  getSelectedRowData(onderwerp){
    this.onderwerp = onderwerp;
    this.isDisabled = false;
  }

  push(){ 
    var navs = this.tabs.getNavController().getAllChildNavs();
    navs[1].push('InboxenSub2Page',{titleParam: this.onderwerp});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenSubPage');
  }

}
