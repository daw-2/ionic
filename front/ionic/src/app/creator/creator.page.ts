import { Component, OnInit } from '@angular/core';

interface Creator {
  name: string;
  job: string;
  avatar: string;
}

@Component({
  selector: 'app-creator',
  templateUrl: './creator.page.html',
  styleUrls: ['./creator.page.scss'],
})
export class CreatorPage implements OnInit {
  // creators: Object[] = [];
  creators: Array<Creator> = [];

  constructor() { }

  ngOnInit() {
    this.creators = [
      {
        name: 'John Doe',
        job: 'Développeur Ionic',
        avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        name: 'Matthieu Mota',
        job: 'Développeur back',
        avatar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      }
    ];
  }

}
