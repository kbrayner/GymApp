import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'training-plans',
    loadChildren: () =>
      import('./training-plans/training-plans.module').then(
        (m) => m.TrainingPlansModule
      ),
  },
  {
    path: 'exercises',
    loadChildren: () =>
      import('./exercises/exercises.module').then((m) => m.ExercisesModule),
  },
  {
    path: 'instructors',
    loadChildren: () =>
      import('./instructors/instructors.module').then(
        (m) => m.InstructorsModule
      ),
  },
  {
    path: 'gym-members',
    loadChildren: () =>
      import('./gym-members/gym-members.module').then(
        (m) => m.GymMembersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
