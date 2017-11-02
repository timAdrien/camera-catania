import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(private navController: NavController) {

  }

  public notifMe() {
    LocalNotifications.schedule({
      title: "Test Title",
      text: "Delayed Notification",
      at: new Date(new Date().getTime() + 5 * 1000),
      sound: null
    });
  }


}
