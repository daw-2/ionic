import { Component, OnInit, ViewRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';

interface Profile {
  firstname: string;
  name: string;
  birthday: string;
  music: Array<string>;
  city: string;
  darkMode: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  busy: boolean = false;
  user: Profile = {
    firstname: '',
    name: '',
    birthday: '',
    music: [],
    city: '',
    darkMode: false,
  };
  success = false;
  musics: Array<string> = [
    'A', 'B', 'C', 'D'
  ];

  // Ici je récupère le #form du template
  @ViewChild('form') form: NgForm;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('profile').then(
      u => u !== null ? this.user = u : null
    );
  }

  save() {
    console.log(this.form);
    this.busy = true;

    setTimeout(() => {
      this.storage.set('profile', this.user).then(
        () => {
          this.busy = false;
          this.success = true
        }
      );
    }, 1000);

    setTimeout(() => this.success = false, 5000);
  }

  // Active ou non le dark mode sur l'application
  toggleDarkMode() {
    console.log('dark mode');
    // On ajoute ou on supprime la classe dark de body
    document.body.classList.toggle('dark');
  }

}
