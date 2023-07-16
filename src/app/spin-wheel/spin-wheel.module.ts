import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SpinWheelPageRoutingModule } from './spin-wheel-routing.module';
import { SpinWheelPage } from './spin-wheel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,SpinWheelPageRoutingModule
  ],
  declarations: [SpinWheelPage]
})
export class SpinWheelPageModule {}
