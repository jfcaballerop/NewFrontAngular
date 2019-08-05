import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Bs4FormsModule } from './bs4-forms/bs4-forms.module';
import { NgbdSortableHeader } from './sort/sortable.directive';



@NgModule({
  declarations: [NgbdSortableHeader],
  imports: [
    CommonModule,
    Bs4FormsModule,
    HttpClientModule
  ],
  exports: [
    Bs4FormsModule,
    NgbdSortableHeader
  ]
})
export class SharedModule { }
