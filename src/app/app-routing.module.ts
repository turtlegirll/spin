import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'spinning-wheel',
    loadChildren: () => import('./spinning-wheel/spinningwheel.module').then(m => m.SpinningWheelModule)
  },  {
    path: 'edit-wheel',
    loadChildren: () => import('./edit-wheel/edit-wheel.module').then( m => m.EditWheelPageModule)
  },
  {
    path: 'edit-wheel',
    loadChildren: () => import('./edit-wheel/edit-wheel.module').then( m => m.EditWheelPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
