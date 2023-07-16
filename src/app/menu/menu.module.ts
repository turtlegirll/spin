import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


import {IonicModule} from '@ionic/angular';

import {MenuRoutingModule} from './menu-routing.module';

import {MenuPage} from './menu.page';


/*
const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'spin-wheel',
        loadChildren: () => import('../spin-wheel/spin-wheel.module').then(m => m.SpinWheelPageModule)
      },
      {
        path: 'edit-wheel',
        loadChildren: () => import('../edit-wheel/edit-wheel.module').then(m => m.EditWheelPageModule)
      },
    ]
  },
  {path: 'menu', redirectTo: '/menu/spiny-wheel', pathMatch: 'full'}
];

*/


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    //RouterModule.forChild(routes)
  ],
  exports: [
    MenuPage
  ],
  declarations: [MenuPage]
})
export class MenuModule {
}
