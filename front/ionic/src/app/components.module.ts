import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    FilterPipe
  ]
})
export class ComponentsModule { }
