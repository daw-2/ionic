import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Plugins, CameraResultType, Capacitor } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';

const { Camera } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menuColorButton: string = '';
  images: any[] = [];

  constructor(
    private platform: Platform,
    private alert: AlertController,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    if (this.platform.is('ios')) {
      this.menuColorButton = 'secondary';
    }
  }

  takePicture() {
    Camera.getPhoto({
      resultType: CameraResultType.Uri
    }).then(image => {
      this.images.push(
        this.sanitizer.bypassSecurityTrustUrl(image.webPath)
      );

      return this.alert.create({
        message: JSON.stringify(image)
      });
    }).then(a => a.present());
  }

}
