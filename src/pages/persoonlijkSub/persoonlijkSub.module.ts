import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersoonlijkSubPage } from './persoonlijkSub';

@NgModule({
  declarations: [
    PersoonlijkSubPage,
  ],
  imports: [
    IonicPageModule.forChild(PersoonlijkSubPage),
  ],
})
export class PersoonlijkSubPageModule { }
