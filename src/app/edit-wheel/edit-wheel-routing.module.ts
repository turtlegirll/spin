import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditWheelPageComponent } from './edit-wheel.page.component';

const routes: Routes = [
  {
    path: '',
    component: EditWheelPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditWheelPageRoutingModule {}
