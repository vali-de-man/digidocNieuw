import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'terinfogrid',
  templateUrl: 'terinfogrid.html'
})
export class TerinfogridComponent {
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
        {onderwerp: "Kamervragen", werkmapnummer: "6661234789", ontvangstdatum: "11-09-2017", parafenlijn: "QUEST", volgnummer: "1"},
        {onderwerp: "Inhuizing", werkmapnummer: "999736782", ontvangstdatum: "31-12-2017", parafenlijn: "MOVED", volgnummer: "2"},
        {onderwerp: "Gunning De Vries", werkmapnummer: "1234567890", ontvangstdatum: "25-05-2017", parafenlijn: "GIVE", volgnummer: "3"}
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
