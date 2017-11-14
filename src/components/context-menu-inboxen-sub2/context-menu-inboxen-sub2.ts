import { NavParams, App, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'context-menu-inboxen-sub2',
  templateUrl: 'context-menu-inboxen-sub2.html'
})
export class ContextMenuInboxenSub2Component {

  public onderwerp;
  public disabled;

  constructor(public navParams: NavParams, private app: App, public viewCtrl: ViewController) {
    let inboxenSub2 = this.navParams.data;
    this.onderwerp = inboxenSub2.onderwerp;
    this.disabled = inboxenSub2.isDisabled;
  }

  close() {
    this.viewCtrl.dismiss();
  } 
  
}
