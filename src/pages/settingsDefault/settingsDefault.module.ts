import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsDefaultPage } from './settingsDefault';

@NgModule({
  declarations: [
    SettingsDefaultPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsDefaultPage),
  ],
})
export class SettingsDefaultPageModule {}
