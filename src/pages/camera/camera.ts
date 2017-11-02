import { Component, ViewChild } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { Camera} from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MediaCapture } from '@ionic-native/media-capture';


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

  constructor(private camera:Camera,
              private base64ToGallery:Base64ToGallery,
              private mediaCapture:MediaCapture) {
  }

  takePicture(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
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
   this.base64ToGallery.base64ToGallery(this.imageData, { prefix: 'img_' }).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }

  startRecording() {
    this.mediaCapture.captureVideo((videodata) => {
      this.videoData = JSON.stringify(videodata);
      alert(JSON.stringify(videodata));
    })
  }

  saveVideo() {

  }

}
