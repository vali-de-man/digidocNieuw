import { TabsPage } from './../tabs/tabs';
import { Functions } from './../../providers/functions/functions';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


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
  
  constructor(private tabs: TabsPage, private functions: Functions, public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get("titleParam");
 }

 ngAfterViewInit(){
this.slides.lockSwipes(true);
this.slides.autoHeight = true;
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
    var navs = this.tabs.getNavController().getAllChildNavs();
    navs[1].push('InboxenSub2Page',{titleParam: this.onderwerp});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxenSubPage');
  }

}
