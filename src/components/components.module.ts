import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AggridComponent } from './aggrid/aggrid';
import {AgGridModule} from 'ag-grid-angular/main';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	declarations: [AggridComponent],
	imports: [
	BrowserModule,
	AgGridModule.withComponents([])
],
	exports: [AggridComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
