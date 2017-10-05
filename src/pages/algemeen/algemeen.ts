import { DesktoplayoutPage } from './../desktoplayout/desktoplayout';
import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlgemeenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-algemeen',
  templateUrl: 'algemeen.html',
})
export class AlgemeenPage {

  constructor(private auth: AuthService, public navCtrl: NavController, public navParams: NavParams, private desktopLayoutpage: DesktoplayoutPage) {
  }

 goTo(){
    var navs = this.desktopLayoutpage.getNavController().getAllChildNavs();
    navs[1].push('AndereDesktoplayoutPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlgemeenPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
}
