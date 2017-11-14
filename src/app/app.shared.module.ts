import { ComponentsModule } from './../components/components.module';
import { AgGridModule } from 'ag-grid-angular/main';
import { HuidigwerkgridComponent } from './../components/huidigwerkgrid/huidigwerkgrid';
import { TerinfogridComponent } from './../components/terinfogrid/terinfogrid';
import { AfgerondwerkgridComponent } from './../components/afgerondwerkgrid/afgerondwerkgrid';
import { OpentaakdocumentengridComponent } from './../components/opentaakdocumentengrid/opentaakdocumentengrid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HuidigwerkgridComponent,
    TerinfogridComponent,
    AfgerondwerkgridComponent,
    OpentaakdocumentengridComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AgGridModule.withComponents([])
  ],

  exports: [
    AgGridModule,
    HuidigwerkgridComponent,
    TerinfogridComponent,
    AfgerondwerkgridComponent,
    OpentaakdocumentengridComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedAgGridModule { }
