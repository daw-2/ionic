import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RandomUser } from '../random-user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  @Input() user: RandomUser;

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modal.dismiss().then();
  }

}
