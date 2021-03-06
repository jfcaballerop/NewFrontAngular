import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Bs4FormsModule } from './bs4-forms/bs4-forms.module';
import { NgbdSortableHeader } from './directives/sortable.directive';




@NgModule({
  declarations: [NgbdSortableHeader],
  imports: [
    CommonModule,
    Bs4FormsModule,
    HttpClientModule,
    NgbModule
    ],
  exports: [
    Bs4FormsModule,
    NgbdSortableHeader,
    NgbModule,
    NgbdSortableHeader
  ]
})
export class SharedModule { }
