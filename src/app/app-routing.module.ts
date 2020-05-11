import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'account/:username',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'newcontact',
    loadChildren: () => import('./newcontact/newcontact.module').then( m => m.NewcontactPageModule)
  },
  {
    path: 'editcontact',
    loadChildren: () => import('./editcontact/editcontact.module').then( m => m.EditcontactPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then( m => m.ChartPageModule)
  },
  // {
  //   path: 'maps',
  //   loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
