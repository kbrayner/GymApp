import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymMembersComponent } from './gym-members.component';

const routes: Routes = [
  { path: '', component: GymMembersComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('./gym-member/gym-member.module').then((m) => m.GymMemberModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymMembersRoutingModule {}
