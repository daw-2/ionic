import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TweetService } from '../tweet.service';
import { ModalController } from '@ionic/angular';
import { TweetFormPage } from '../tweet-form/tweet-form.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tweets: any[] = [];
  page: number = 1;

  constructor(
    public auth: AuthService,
    private tweet: TweetService,
    private modal: ModalController
  ) {}

  ngOnInit() {
    this.loadTweets().then();
  }

  next(event: any) {
    this.page++;

    this.loadTweets().then((response: any) => {
      event.target.complete();

      if (this.page >= response.last_page) {
        event.target.disabled = true;
      }
    });
  }

  loadTweets(): Promise<Object[]> {
    return new Promise(resolve => {
      this.tweet.getTweets(this.page)
        .subscribe((response: any) => {
          this.tweets = this.tweets.concat(response.data);
          resolve(response);
        });
    });
  }

  openModal() {
    this.modal.create({
      component: TweetFormPage
    }).then(m => m.present());
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
