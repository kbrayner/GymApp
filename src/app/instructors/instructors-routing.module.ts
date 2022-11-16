import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorsComponent } from './instructors.component';

const routes: Routes = [
  { path: '', component: InstructorsComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('./instructor/instructor.module').then((m) => m.InstructorModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorsRoutingModule {}
