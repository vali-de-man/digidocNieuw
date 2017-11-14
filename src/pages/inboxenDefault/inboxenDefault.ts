import { Functions } from './../../providers/functions/functions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inboxenDefault',
  templateUrl: 'inboxenDefault.html',
})
export class InboxenDefaultPage {

  constructor(private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
  }

  public logout() {
    this.functions.logout();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenDefaultPage');
  }

}
