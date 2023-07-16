import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MenuPage} from "./menu/menu.page";


/*const routes: Routes = [

  {path: '', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },

];*/

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: '',
        redirectTo: 'spin-wheel',
        pathMatch: 'full'
      },
      {
        path: 'spin-wheel',
        loadChildren: () => import('./spin-wheel/spin-wheel.module').then(m => m.SpinWheelPageModule)
      },
      {
        path: 'edit-wheel',
        loadChildren: () => import('./edit-wheel/edit-wheel.module').then(m => m.EditWheelPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'menu/spin-wheel' // Redirect all other unknown paths to 'menu/spin-wheel'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

/*  {

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
    loadChildren: () => import('./spinning-wheel/spinning-wheel.module').then(m => m.SpinningWheelModule)
  },


  {
    path: 'edity-wheel',
    loadChildren: () => import('./edit-wheel/edit-wheel.module').then(m => m.EditWheelPageModule)
  },
  {
    path: 'spiny-wheel',
    loadChildren: () => import('./spin-wheel/spin-wheel.module').then(m => m.SpinWheelPageModule)
  },
  */
