import {ContextMenuInboxenSub2Component } from './../../components/context-menu-inboxen-sub2/context-menu-inboxen-sub2';
import { Functions } from './../../providers/functions/functions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inboxenSub2',
  templateUrl: 'inboxenSub2.html'
})
export class InboxenSub2Page {
  public onderwerp;
  public isDisabled = true;
  public taakNaam;
  
  public smallScreen = window.innerWidth<768;
  constructor(public popOver: PopoverController, private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
   this.onderwerp = navParams.get("titleParam");
  }

  presentPopover(contextmenu) {
    let popover = this.popOver.create(ContextMenuInboxenSub2Component, this);
    popover.present({
      ev: contextmenu
    });
    return false;
  }

  getSelectedRowData(taaknaam){
    this.taakNaam = taaknaam;
    this.isDisabled = false;
  }

  public naarWordApp(){
    window.open('http://localhost:8080/CrunchifyRESTJerseyExample/we.html','_blank','location=no');
  }

  public naarDocGen(){
    window.open('https://docgen.frd.shsdir.nl/','_blank','location=no');
  }

  public logout() {
    this.functions.logout();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenSub2Page');
  }

}
