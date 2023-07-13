import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';


import { SpinningWheelPage } from './spinning-wheel-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule

  ],
  exports: [
    SpinningWheelPage
  ],
  declarations: [SpinningWheelPage]
})
export class SpinningWheelModule {}
