import {AgGridModule} from 'ag-grid-angular/main';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { AggridComponent } from './aggrid/aggrid';

@NgModule({
	declarations: [AggridComponent,
  ],

	imports: [BrowserModule,
  AgGridModule.withComponents([]),
],

  exports: [AggridComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule {}
