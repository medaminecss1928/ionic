import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListetodoPageRoutingModule } from './listetodo-routing.module';

import { ListetodoPage } from './listetodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListetodoPageRoutingModule
  ],
  declarations: [ListetodoPage]
})
export class ListetodoPageModule {}
