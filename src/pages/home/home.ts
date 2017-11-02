import { Component } from '@angular/core';
import { CameraPage} from '../camera/camera';
import { NotificationPage} from '../notification/notification';

@Component({
  templateUrl: 'home.html',
  providers: [],
  entryComponents: [
    CameraPage,
    NotificationPage
  ]
})

export class HomePage {

  // Déclaration des pages
  cameraPage = CameraPage;
  notificationPage = NotificationPage;

  constructor(){

  }
}
