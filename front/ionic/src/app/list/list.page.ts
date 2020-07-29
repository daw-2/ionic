import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RandomUser } from '../random-user';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { UserDetailPage } from '../user-detail/user-detail.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users: BehaviorSubject<RandomUser[]> = new BehaviorSubject([]);
  loaded: boolean = false;
  page: number = 1;
  gender: string = 'all';
  skeletons = [...Array(20).keys()];

  constructor(
    private userService: UserService,
    private modal: ModalController
  ) { }

  // Pour refresh la liste au switch de tab
  // ionViewWillEnter() { }

  ngOnInit() {
    this.users = new BehaviorSubject([]);
    this.loaded = false;
    this.page = 1;

    this.loadUsers().then(() => this.loaded = true);
  }

  next(event: any) {
    this.page++;

    this.loadUsers().then(
      () => {
        event.target.complete();

        if (this.page >= 5) {
          event.target.disabled = true;
        }
      }
    );
  }

  loadUsers(): Promise<RandomUser[]> {
    return new Promise(resolve => {
      this.userService.getUsers(this.page)
        .subscribe(
          newUsers => {
            this.users.next(
              this.users.getValue().concat(newUsers)
            );
            resolve(newUsers);
          }
        );
    });
  }

  filterGender(event: any) {
    console.log(event.detail.value);
  }

  goToUser(user: RandomUser) {
    this.modal.create({
      component: UserDetailPage,
      componentProps: { user }
    }).then(m => m.present());
  }

}
