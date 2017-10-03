import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InboxenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inboxen',
  templateUrl: 'inboxen.html',
})
export class InboxenPage {
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

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.items = [
      'Groepsinbox NED/EEN',
      'Groepsinbox NED/TWEE',
      'Groepsinbox NED/DRIE',
      'Groepsinbox NED'];
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push("GroepsinboxNedDriePage");
  }

  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenPage');
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
}
