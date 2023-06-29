import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomContentPageRoutingModule } from './custom-content-routing.module';

import { CustomContentPage } from './custom-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomContentPageRoutingModule
  ],
  declarations: [CustomContentPage]
})
export class CustomContentPageModule {}
