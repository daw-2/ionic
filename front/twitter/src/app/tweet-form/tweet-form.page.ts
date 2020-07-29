import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.page.html',
  styleUrls: ['./tweet-form.page.scss'],
})
export class TweetFormPage implements OnInit {
  tweet: any = {
    content: ''
  };

  constructor(
    public modal: ModalController,
    private tweetService: TweetService
  ) { }

  ngOnInit() {
  }

  createTweet() {
    this.tweetService.createTweet(this.tweet).subscribe(
      () => this.modal.dismiss()
    );
  }

}
