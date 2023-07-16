import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {EditWheelPageRoutingModule} from './edit-wheel-routing.module';

import {EditWheelPageComponent} from './edit-wheel.page.component';
import {MenuModule} from "../menu/menu.module";
import {SpinWheelPageRoutingModule} from "../spin-wheel/spin-wheel-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditWheelPageRoutingModule,


  ],
  declarations: [EditWheelPageComponent]
})
export class EditWheelPageModule {
}
