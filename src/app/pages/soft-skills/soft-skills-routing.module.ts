import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftSkillsComponent } from './soft-skills.component';

const routes: Routes = [
  {
    path: 'softSkills',
    component: SoftSkillsComponent
  },
  {path: "**", redirectTo: "softSkills"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftSkillsRoutingModule { }
