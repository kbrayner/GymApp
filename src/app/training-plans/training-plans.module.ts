import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingPlansRoutingModule } from './training-plans-routing.module';
import { TrainingPlansComponent } from './training-plans.component';


@NgModule({
  declarations: [
    TrainingPlansComponent
  ],
  imports: [
    CommonModule,
    TrainingPlansRoutingModule
  ]
})
export class TrainingPlansModule { }
