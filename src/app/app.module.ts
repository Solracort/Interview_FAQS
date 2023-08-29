import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Html5Component } from './pages/html5/html5.component';
import { CSS3Component } from './pages/css3/css3.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { AngularComponent } from './pages/angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    Html5Component,
    CSS3Component,
    JavascriptComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
