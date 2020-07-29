import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatorPageRoutingModule } from './creator-routing.module';

import { CreatorPage } from './creator.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreatorPage]
})
export class CreatorPageModule {}
