import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxenSub2Page } from './inboxenSub2';

@NgModule({
  declarations: [
    InboxenSub2Page,
  ],
  imports: [
    IonicPageModule.forChild(InboxenSub2Page),
    HttpModule
  ],
  providers: [
    HttpModule
  ]
})
export class InboxenSub2PageModule { }
