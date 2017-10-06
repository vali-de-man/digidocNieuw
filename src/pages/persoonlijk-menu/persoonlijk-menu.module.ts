import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersoonlijkMenuPage } from './persoonlijk-menu';

@NgModule({
  declarations: [
    PersoonlijkMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PersoonlijkMenuPage),
  ],
})
export class PersoonlijkMenuPageModule {}
