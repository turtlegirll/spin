import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinningWheelPage } from './spinning-wheel-page.component';

const routes: Routes = [
  {
    path: '',
    component: SpinningWheelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomContentPageRoutingModule {}
