import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, Base64ToGallery, MediaCapture} from 'ionic-native';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'camera.html'
})

export class CameraPage {
  public base64Image: string;
  public imageData: string;
  public videoData: string;
  @ViewChild('myvideo') myVideo: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  takePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // base64 photo
      this.imageData = imageData;
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  savePicture() {
   Base64ToGallery.base64ToGallery(this.imageData, { prefix: 'img_' }).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }

  startRecording() {
   /* MediaCapture.captureVideo((videodata) => {
      this.videoData = JSON.stringify(videodata);
      alert(JSON.stringify(videodata));
    })*/

    MediaCapture.captureAudio().then((data: MediaFile[]) =>{
      console.log(data) // data is the captured video file object
    });
  }

  saveVideo() {

  }

}
