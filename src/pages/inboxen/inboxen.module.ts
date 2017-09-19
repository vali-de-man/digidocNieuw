import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxenPage } from './inboxen';

@NgModule({
  declarations: [
    InboxenPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxenPage),
  ],
  exports: [
    InboxenPage
  ]
})
export class InboxenPageModule {}
