import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPage } from './about.page';

const routes: Routes = [
  {
    path: '',
    component: AboutPage,
    data: {
      title: 'About'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
