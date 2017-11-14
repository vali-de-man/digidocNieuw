import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsSubPage } from './settingsSub';

@NgModule({
  declarations: [
    SettingsSubPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsSubPage),
  ],
})
export class SettingsSubPageModule {}
