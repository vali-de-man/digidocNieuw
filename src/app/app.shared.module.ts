import { ComponentsModule } from './../components/components.module';
import { AgGridModule } from 'ag-grid-angular/main';
import { AggridComponent } from './../components/aggrid/aggrid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AggridComponent,
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  exports: [
    AgGridModule,
    AggridComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedAgGridModule { }
