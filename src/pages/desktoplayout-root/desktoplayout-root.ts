import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DesktoplayoutRootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desktoplayout-root',
  templateUrl: 'desktoplayout-root.html',
})
export class DesktoplayoutRootPage {

  headerRow = [
    '#',
    'Onderwerp',
    'Werkmapnummer',
    'Ontvangstdatum'
  ]

  nummers = [1,2,3,4,5,6,7,8,9,10]


 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesktoplayoutRootPage');
  }

}
