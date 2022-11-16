import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingPlansComponent } from './training-plans.component';

const routes: Routes = [
  { path: '', component: TrainingPlansComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('./training-plan/training-plan.module').then(
        (m) => m.TrainingPlanModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPlansRoutingModule {}
