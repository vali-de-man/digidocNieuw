import { Component, Output, EventEmitter } from '@angular/core';
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'terinfogrid',
  templateUrl: 'terinfogrid.html'
})
export class TerinfogridComponent {
    public gridOptions:GridOptions;
    public rowData:any[];
    public columnDefs:any[];

    @Output() clickingrid = new EventEmitter();

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

public getTitleParam() {
  var nodeData = this.gridOptions.api.getSelectedNodes();
  if(nodeData["0"].data.onderwerp == null){
      //We do nothing in this case, the user has clicked in the grid but not selected a row.
      //Retrieving the selected rowData would yield an error.
  } else{
  let onderwerp = nodeData["0"].data.onderwerp;
  this.clickingrid.emit(onderwerp);
  }
}
}
