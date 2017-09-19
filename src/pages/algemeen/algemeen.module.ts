import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlgemeenPage } from './algemeen';

@NgModule({
  declarations: [
    AlgemeenPage,
  ],
  imports: [
    IonicPageModule.forChild(AlgemeenPage),
  ],
  exports: [
    AlgemeenPage
  ]
})
export class AlgemeenPageModule {}
