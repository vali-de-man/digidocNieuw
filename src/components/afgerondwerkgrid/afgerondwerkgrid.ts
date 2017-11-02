import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'afgerondwerkgrid',
  templateUrl: 'afgerondwerkgrid.html'
})
export class AfgerondwerkgridComponent {
    public gridOptions:GridOptions;
    public rowData:any[];
    public columnDefs:any[];

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.columnDefs = [
        {headerName: "Onderwerp", field: "onderwerp"},
        {headerName: "Werkmapnummer", field: "werkmapnummer"},
        {headerName: "Ontvangstdatum", field: "ontvangstdatum"},
        {headerName: "Parafenlijn" ,field: "parafenlijn"},
        {headerName: "Volgnummer" ,field: "volgnummer"}
    ];
    this.rowData = [
        {onderwerp: "Bezuiniging", werkmapnummer: "73517033383", ontvangstdatum: "02-04-2017", parafenlijn: "SCRG", volgnummer: "1"},
        {onderwerp: "Aanvraag vakantie D. Romer", werkmapnummer: "8822663457", ontvangstdatum: "15-04-2017", parafenlijn: "RYAN", volgnummer: "2"},
        {onderwerp: "Declaratie dienstfiets", werkmapnummer: "2110849573", ontvangstdatum: "06-06-2017", parafenlijn: "GAZEL", volgnummer: "3"}
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
