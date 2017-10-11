import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersoonlijkDefaultPage } from './persoonlijkDefault';

@NgModule({
  declarations: [
    PersoonlijkDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(PersoonlijkDefaultPage),
  ],
  exports: [
    PersoonlijkDefaultPage
  ]
})
export class PersoonlijkDefaultPageModule { }
