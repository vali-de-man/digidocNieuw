import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlgemeenMenuPage } from './algemeen-menu';

@NgModule({
  declarations: [
    AlgemeenMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AlgemeenMenuPage),
  ],
})
export class AlgemeenMenuPageModule {}
