import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GroepsinboxNedDriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groepsinbox-ned-drie',
  templateUrl: 'groepsinbox-ned-drie.html',
})
export class GroepsinboxNedDriePage {
  items = [
    'WOB verzoek ABCD',
    'Burgerbrief nr 1'
  ];

  HWitems = [
    'WOB verzoek ABCD',
    'Burgerbrief nr 1',
    'Inkoop, inhuur, gunning J. Jansen',
    'Burgerbrief klacht',
    'Beleidsonderwerp 21',
    'Beleidsonderwerp 20',
    'Beleidsonderwerp 19',
    'Beleidsonderwerp 18',
    'Beleidsonderwerp 17',
    'Ministerraadadavies 09'
  ]

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push("BurgerbriefNr_1Page");
  }

  HWitemSelected(HWitem: string){
    console.log("Selected HWItem", HWitem);
    this.navCtrl.push("BurgerbriefNr_1Page");
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroepsinboxNedDriePage');
  }

}
