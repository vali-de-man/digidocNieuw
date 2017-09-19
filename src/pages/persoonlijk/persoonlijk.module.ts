import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersoonlijkPage } from './persoonlijk';

@NgModule({
  declarations: [
    PersoonlijkPage,
  ],
  imports: [
    IonicPageModule.forChild(PersoonlijkPage),
  ],
  exports: [
    PersoonlijkPage
  ]
})
export class PersoonlijkPageModule {}
