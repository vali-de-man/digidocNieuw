import { Functions } from './../../providers/functions/functions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inboxenSub2',
  templateUrl: 'inboxenSub2.html'
})
export class InboxenSub2Page {

  constructor(private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
  }

  public logout() {
    this.functions.logout();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenSub2Page');
  }

}
