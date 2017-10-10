import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlgemeenDefaultPage } from './algemeenDefault';

@NgModule({
  declarations: [
    AlgemeenDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(AlgemeenDefaultPage),
  ],
  exports: [
    AlgemeenDefaultPage
  ]
})
export class AlgemeenDefaultPageModule { }
