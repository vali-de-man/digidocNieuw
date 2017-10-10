import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxenSubPage } from './inboxenSub';

@NgModule({
  declarations: [
    InboxenSubPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxenSubPage),
  ],
})
export class InboxenSubPageModule { }
