import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingPlansComponent } from './training-plans.component';

const routes: Routes = [{ path: '', component: TrainingPlansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingPlansRoutingModule { }
