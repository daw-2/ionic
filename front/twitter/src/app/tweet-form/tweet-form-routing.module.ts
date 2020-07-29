import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetFormPage } from './tweet-form.page';

const routes: Routes = [
  {
    path: '',
    component: TweetFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TweetFormPageRoutingModule {}
