import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsMenuPage } from './settingsMenu';

@NgModule({
  declarations: [
    SettingsMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsMenuPage),
  ],
})
export class SettingsMenuPageModule {}
