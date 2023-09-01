import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftSkillsRoutingModule } from './soft-skills-routing.module';
import { SoftSkillsComponent } from './soft-skills.component';


@NgModule({
  declarations: [
    SoftSkillsComponent
  ],
  imports: [
    CommonModule,
    SoftSkillsRoutingModule
  ]
})
export class SoftSkillsModule { }
