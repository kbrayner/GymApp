import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises.component';

const routes: Routes = [
  { path: '', component: ExercisesComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('./exercise/exercise.module').then((m) => m.ExerciseModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesRoutingModule {}
