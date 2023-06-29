import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomContentPage } from './custom-content.page';

const routes: Routes = [
  {
    path: '',
    component: CustomContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomContentPageRoutingModule {}
