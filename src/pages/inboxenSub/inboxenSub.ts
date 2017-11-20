import {ContextMenuInboxenSubComponent } from './../../components/context-menu-inboxen-sub/context-menu-inboxen-sub';
import { TabsPage } from './../tabs/tabs';
import { Functions } from './../../providers/functions/functions';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inboxenSub',
  templateUrl: 'inboxenSub.html',
})
export class InboxenSubPage {
  public title;
  public onderwerp;
  public isDisabled = true;
  @ViewChild(Slides) slides: Slides;
  
  public smallScreen = window.innerWidth<768;
  constructor(public popOver: PopoverController, private tabs: TabsPage, private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get("titleParam");
 }

 presentPopover(contextmenu) {
  let popover = this.popOver.create(ContextMenuInboxenSubComponent, this);
  popover.present({
    ev: contextmenu
  });
  return false;
}

 ngAfterViewInit(){
this.slides.lockSwipes(true);
this.slides.autoHeight = true;
 }

 getTitle(){
   return this.title;
 }

 goToSlide(index) {
  this.slides.lockSwipes(false);
  this.slides.slideTo(index, 500);
  this.slides.lockSwipes(true);
}

  logout(){
  this.functions.logout();
  }

handleSlideChange(slideChange){
  //We re-disable the buttons as otherwise the last selected rowdata, which may be from another slide, are passed as NavParam.
  this.isDisabled = true;
}

  getSelectedRowData(onderwerp){
    this.onderwerp = onderwerp;
    this.isDisabled = false;
  }

  push(){ 
    if(this.onderwerp == null){
      //Don't go to next page if pagetitle is unknown.
    } else {
    var navs = this.tabs.getNavController().getAllChildNavs();
    navs[1].push('InboxenSub2Page',{titleParam: this.onderwerp});
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenSubPage');
  }

}
