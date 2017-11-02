import { Component } from '@angular/core';
import { CameraPage} from '../camera/camera';

@Component({
  templateUrl: 'home.html',
  providers: [],
  entryComponents: [
    CameraPage
  ]
})

export class HomePage {
  cameraPage = CameraPage;

  constructor(){

  }
}
