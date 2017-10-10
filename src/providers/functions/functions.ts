import { App } from 'ionic-angular';
import { AuthService } from './../auth-service/auth-service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Functions {

  constructor(public auth: AuthService, public app: App) {
    console.log('Hello FunctionsProvider');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot("LoginPage");
    });
  }

}
