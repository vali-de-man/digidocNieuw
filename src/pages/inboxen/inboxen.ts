import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesktoplayoutPage} from '../desktoplayout/desktoplayout';

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
    'Groepsinbox NED/EEN (3)',
    'Groepsinbox NED/TWEE (7)',
    'Groepsinbox NED/DRIE (0)',
    'Groepsinbox NED (null)',
    'Groepsinbox ARG/UN (1392)',
    'Groepsinbox ARG/DOS (54)',
    'Groepsinbox DEU/EINS (1)',
    'Groepsinbox DEU/ZWEI (1)',
    'PERSOONLIJKE INBOX (1440)'
  ];


  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push("GroepsinboxNedDriePage");
  }

  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private desktopLayoutpage : DesktoplayoutPage) {
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
      this.navCtrl.setRoot('LoginPage')
    });
  }
}
