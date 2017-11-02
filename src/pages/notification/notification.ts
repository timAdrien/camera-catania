import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';

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

  textToBeNotify: String = "";
  constructor() {

  }

  public notifMe(text, time) {
    LocalNotifications.schedule({
      title: "Notification TP",
      text: text,
      at: new Date(new Date().getTime() + time * 1000),
      sound: null
    });
  }


}
