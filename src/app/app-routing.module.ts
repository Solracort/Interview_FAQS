import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './shared/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: "html",
    loadChildren: () => import('./pages/html/html.module')
      .then(m => m.HtmlModule)
  },
  {
    path: "css",
    loadChildren: () => import('./pages/css/css.module')
      .then(m => m.CssModule)
  },
  {
    path: "soft-skills",
    loadChildren: () => import('./pages/soft-skills/soft-skills.module')
      .then(m => m.SoftSkillsModule)
  },
  {
    path: "javascript",
    loadChildren: () => import('./pages/javascript/javascript.module')
      .then(m => m.JavascriptModule)
  },
  {
    path: "angular",
    loadChildren: () => import('./pages/angular/angular.module')
      .then(m => m.AngularModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
