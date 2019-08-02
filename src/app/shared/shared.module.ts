import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Bs4FormsModule } from './bs4-forms/bs4-forms.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Bs4FormsModule,
    HttpClientModule
  ],
  exports: [
    Bs4FormsModule
  ]
})
export class SharedModule { }
