import { Functions } from './../providers/functions/functions';
import { FavoriteProvider } from './../providers/favorite/favorite';
import { AuthService } from './../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {ContextMenuInboxenSubComponent } from './../components/context-menu-inboxen-sub/context-menu-inboxen-sub';
import { ContextMenuInboxenSub2Component } from './../components/context-menu-inboxen-sub2/context-menu-inboxen-sub2';

@NgModule({
  declarations: [
    MyApp,
    ContextMenuInboxenSubComponent,
    ContextMenuInboxenSub2Component
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContextMenuInboxenSubComponent,
    ContextMenuInboxenSub2Component
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    FavoriteProvider,
    Functions
  ]
})
export class AppModule {}
