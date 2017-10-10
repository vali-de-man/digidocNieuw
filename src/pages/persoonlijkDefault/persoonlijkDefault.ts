import { Functions } from './../../providers/functions/functions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-persoonlijkDefault',
  templateUrl: 'persoonlijkDefault.html',
})
export class PersoonlijkDefaultPage {

  constructor(private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
  }

  logout(){
    this.functions.logout();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad persoonlijkDefaultPage');
  }
}
