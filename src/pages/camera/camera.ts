import { Component } from '@angular/core';
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
  templateUrl: 'camera.html',
  providers: [
    Camera,
    Base64ToGallery,
    MediaCapture
  ],
})

export class CameraPage {
  // Déclaration de nos variales
  public base64Image: string;
  public imageData: string;
  public videoData: string;

  // Instance de nos modules via le constructeur
  constructor(private camera:Camera,
              private base64ToGallery:Base64ToGallery,
              private mediaCapture:MediaCapture) {
  }

  // Fonction qui permet de prendre une photo grâce au module "Camera"
  takePicture(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // Photo en base64
      this.imageData = imageData;

      // Photo Image avec une source en base 64
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  // Fonction qui permet de sauvegarder la photo prise précedemment
  savePicture() {
    // Enregistrement de la photo grâce au module "Base64ToGallery"
   this.base64ToGallery.base64ToGallery(this.imageData, { prefix: 'img_' }).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }

  // Fonction qui permet d'enregister une vidéo
  startRecording() {
    // Enregistrement d'une vidéo grâce au module "MediaCapture"
    this.mediaCapture.captureVideo((videodata) => {
      this.videoData = JSON.stringify(videodata);
    })
  }

}
