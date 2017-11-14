import { NavParams, App, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'context-menu-inboxen-sub',
  templateUrl: 'context-menu-inboxen-sub.html'
})
export class ContextMenuInboxenSubComponent {

  public onderwerp;
  public disabled;

  constructor(public navParams: NavParams, private app: App, public viewCtrl: ViewController) {
    let inboxenSub = this.navParams.data;
    this.onderwerp = inboxenSub.onderwerp;
    this.disabled = inboxenSub.isDisabled;
  }

  push(){
  var navs = this.app.getActiveNavs();
  navs[1].push('InboxenSub2Page',{titleParam: this.onderwerp});
}

close() {
  this.viewCtrl.dismiss();
} 

}
