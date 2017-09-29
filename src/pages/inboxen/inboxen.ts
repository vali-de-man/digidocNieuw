import { PopoverPage } from './../popover/popover';
import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
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

  constructor(public poppy: PopoverController, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private desktopLayoutpage : DesktoplayoutPage, private app: App) {
  }

  presentPopover(myEvent) {
    let popover = this.poppy.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
