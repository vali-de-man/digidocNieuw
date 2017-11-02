import { Functions } from './../../providers/functions/functions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inboxenSub2',
  templateUrl: 'inboxenSub2.html'
})
export class InboxenSub2Page {
  public title;
  // var GUID = CMIS link that asks the document concerned what its GUID is.

  constructor(private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
   this.title = navParams.get("titleParam");
  }

  public naarWordApp(){
    window.open('https://d.docs.live.net/7a7909fe2fd9be5e/Documents/Document%2011.docx','_blank','location=no');
  }

  public naarDocGen(){
    window.open('https://docgen.frd.shsdir.nl/','_blank','location=no');
  }

  public logout() {
    this.functions.logout();
  }

  /*
  public officeWebApp(GUID){
    let GUID = GUID;
    this.functions.officeWebApp(GUID);
  }
*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenSub2Page');
  }

}
