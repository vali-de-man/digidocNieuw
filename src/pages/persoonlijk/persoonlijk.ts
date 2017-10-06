import { DesktoplayoutPage } from './../desktoplayout/desktoplayout';
import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersoonlijkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-persoonlijk',
  templateUrl: 'persoonlijk.html',
})
export class PersoonlijkPage {

  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private desktopLayoutpage: DesktoplayoutPage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersoonlijkPage');
  }

}
