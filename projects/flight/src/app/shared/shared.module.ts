import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './feature-core';



@NgModule({
  declarations: [
  ],
  imports: [
    HomeComponent,
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SharedModule { }
