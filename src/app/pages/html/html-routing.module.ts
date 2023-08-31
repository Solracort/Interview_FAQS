import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html.component';

const routes: Routes = [
  {
    path: 'htmlPage',
    component: HtmlComponent
  },
  {path: "**", redirectTo: "htmlPage"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
