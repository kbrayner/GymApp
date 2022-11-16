import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingPlanComponent } from './training-plan.component';

const routes: Routes = [{ path: '', component: TrainingPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingPlanRoutingModule { }
