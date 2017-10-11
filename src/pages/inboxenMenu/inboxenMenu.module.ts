import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxenMenuPage } from './inboxenMenu';

@NgModule({
  declarations: [
    InboxenMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxenMenuPage),
  ],
  exports: [
    InboxenMenuPage
  ]
})
export class InboxenMenuPageModule { }
