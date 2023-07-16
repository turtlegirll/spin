import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinWheelPage } from './spin-wheel.page';

const routes: Routes = [
  {
    path: '',
    component: SpinWheelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinWheelPageRoutingModule {}
