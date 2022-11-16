import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymMemberComponent } from './gym-member.component';

const routes: Routes = [{ path: '', component: GymMemberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymMemberRoutingModule { }
