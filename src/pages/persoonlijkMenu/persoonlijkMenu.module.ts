import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersoonlijkMenuPage } from './persoonlijkMenu';

@NgModule({
  declarations: [
    PersoonlijkMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PersoonlijkMenuPage),
  ]
})
export class PersoonlijkMenuPageModule {}
