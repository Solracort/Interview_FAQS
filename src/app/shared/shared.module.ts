import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ReturnButtonComponent } from './return-button/return-button.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    ReturnButtonComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot([])
  ],
  exports: [
    FooterComponent,
    ReturnButtonComponent,
    CardsComponent
  ]
})
export class SharedModule { }
