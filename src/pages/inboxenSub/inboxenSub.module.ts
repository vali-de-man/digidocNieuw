import { AgGridModule } from 'ag-grid-angular/main';
import { AggridComponent } from './../../components/aggrid/aggrid';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxenSubPage } from './inboxenSub';

@NgModule({
  declarations: [
    InboxenSubPage,
    AggridComponent
  ],
  imports: [
    IonicPageModule.forChild(InboxenSubPage),
    AgGridModule.withComponents([])
  ],
})
export class InboxenSubPageModule { }
