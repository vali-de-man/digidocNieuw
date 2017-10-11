import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesktoplayoutPage} from '../desktoplayout/desktoplayout';
import {App} from 'ionic-angular';

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


  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push("GroepsinboxNedDriePage");
  }

  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private desktopLayoutpage : DesktoplayoutPage, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenPage');
  }

  handleMenuClick( item ){
    console.log("clicked on item: ", item);
    var navs = this.desktopLayoutpage.getNavController().getAllChildNavs();
    navs[1].push('BurgerbriefNr_1Page');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot("LoginPage");
    });
  }
}
