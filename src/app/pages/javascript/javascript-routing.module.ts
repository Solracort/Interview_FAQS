import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript.component';

const routes: Routes = [
  {
    path: 'javascriptPage',
    component: JavascriptComponent
  },
  {path: "**", redirectTo: "javascriptPage"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
