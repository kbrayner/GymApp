import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingPlanRoutingModule } from './training-plan-routing.module';
import { TrainingPlanComponent } from './training-plan.component';


@NgModule({
  declarations: [
    TrainingPlanComponent
  ],
  imports: [
    CommonModule,
    TrainingPlanRoutingModule
  ]
})
export class TrainingPlanModule { }
