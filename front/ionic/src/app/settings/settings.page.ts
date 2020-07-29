import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  username: string = '';
  busy: boolean = false;

  constructor(
    private alert: AlertController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('username').then(u => this.username = u);
  }

  async save() {
    let alert = await this.alert.create({
      header: 'Message',
      message: `Vous avez tapé ${this.username}`,
      buttons: ['OK']
    });

    // await alert.present();
    this.busy = true;

    setTimeout(() => {
      this.storage.set('username', this.username).then(
        () => this.busy = false
      );
    }, 1000);
  }

}
