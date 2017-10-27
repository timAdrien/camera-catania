import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';


@Component({
  templateUrl: 'home.html'
})

export class HomePage {
  public base64Image: string;

  public login : String = "";
  public password : String = "";

  constructor() {}

  takePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // base64 photo
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
