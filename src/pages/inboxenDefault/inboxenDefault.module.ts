import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxenDefaultPage } from './inboxenDefault';

@NgModule({
  declarations: [
    InboxenDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxenDefaultPage),
  ],
})
export class InboxenDefaultPageModule {}
