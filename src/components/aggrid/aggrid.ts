import { Component, Input, Output } from '@angular/core';
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'aggrid',
  templateUrl: 'aggrid.html'
})
export class AggridComponent {
    public gridOptions:GridOptions;
    public rowData:any[];
    public columnDefs:any[];

  constructor() {
    this.gridOptions = <GridOptions>{};             
    this.columnDefs = [
        {headerName: "Onderwerp", field: "onderwerp"},
        {headerName: "Werkmapnummer", field: "werkmapnummer"},
        {headerName: "Ontvangstdatum", field: "ontvangstdatum"}
    ];
    this.rowData = [
        {onderwerp: "WOB verzoek ABCD", werkmapnummer: "20170005948", ontvangstdatum: "15-08-2017"},
        {onderwerp: "Burgerbrief nr 1", werkmapnummer: "20170005498", ontvangstdatum: "15-09-2017"},
        {onderwerp: "Inkoop, inhuur, gunning J. Jansen", werkmapnummer: "20170005497", ontvangstdatum: "14-09-2017"}
    ];
    this.handleGridReady();  
  }
  
  private handleGridReady(){
    this.gridOptions = {
        columnDefs: this.columnDefs,
        rowData: this.rowData,
        enableColResize: true,
        floatingFilter:true,
        floatingFiltersHeight:50,
        enableSorting:true,
        rowSelection:'single'
    };
}
}
