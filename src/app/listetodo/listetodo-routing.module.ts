import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListetodoPage } from './listetodo.page';

const routes: Routes = [
  {
    path: '',
    component: ListetodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListetodoPageRoutingModule {}
