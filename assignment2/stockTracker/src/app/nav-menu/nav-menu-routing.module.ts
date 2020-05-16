import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavMenuPage } from './nav-menu.page';

const routes: Routes = [
  {
    path: '',
    component: NavMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavMenuPageRoutingModule {}
