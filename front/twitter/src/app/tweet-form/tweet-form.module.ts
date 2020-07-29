import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TweetFormPageRoutingModule } from './tweet-form-routing.module';

import { TweetFormPage } from './tweet-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TweetFormPageRoutingModule
  ],
  declarations: [TweetFormPage]
})
export class TweetFormPageModule {}
