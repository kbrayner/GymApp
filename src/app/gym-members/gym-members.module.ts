import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymMembersRoutingModule } from './gym-members-routing.module';
import { GymMembersComponent } from './gym-members.component';


@NgModule({
  declarations: [
    GymMembersComponent
  ],
  imports: [
    CommonModule,
    GymMembersRoutingModule
  ]
})
export class GymMembersModule { }
