import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {RouterModule} from "@angular/router";

import {HomePageRoutingModule} from './home-routing.module';
import {SpinningWheelModule} from "../spinning-wheel/spinningwheel.module";
import {EditWheelPageModule} from "../edit-wheel/edit-wheel.module";
import {MenuModule} from "../menu/menu.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule,
    EditWheelPageModule,
    SpinningWheelModule,
    MenuModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}
