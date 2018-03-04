import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, LoadingController } from 'ionic-angular';

import { EventsPage } from '../events/events';
import { MenuPage } from '../menu/menu';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: { username: string, password: string } = {
    username: 'test@',
    password: 'test'
  };

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public loginService: LoginServiceProvider
  ) {
    
  }

  doLogin() {
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    //loader.present();
    //this.loginService.login()
    this.navCtrl.setRoot(MenuPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}