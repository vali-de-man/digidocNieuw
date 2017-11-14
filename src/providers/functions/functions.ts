import { App } from 'ionic-angular';
import { AuthService } from './../auth-service/auth-service';
import { Injectable } from '@angular/core';

@Injectable()
export class Functions {

  constructor(public auth: AuthService, public app: App) {
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot("LoginPage");
    });
  }

}
