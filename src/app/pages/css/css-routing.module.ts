import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css.component';

const routes: Routes = [
  {
    path: 'cssPage',
    component: CssComponent
  },
  {path: "**", redirectTo: "cssPage"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
