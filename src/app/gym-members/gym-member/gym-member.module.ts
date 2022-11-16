import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymMemberRoutingModule } from './gym-member-routing.module';
import { GymMemberComponent } from './gym-member.component';


@NgModule({
  declarations: [
    GymMemberComponent
  ],
  imports: [
    CommonModule,
    GymMemberRoutingModule
  ]
})
export class GymMemberModule { }
