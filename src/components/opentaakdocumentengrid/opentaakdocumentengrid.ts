import { Component, Output, EventEmitter } from '@angular/core';
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'opentaakdocumentengrid',
  templateUrl: 'opentaakdocumentengrid.html'
})
export class OpentaakdocumentengridComponent {
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
        {onderwerp: "Brief", werkmapnummer: "666333552", ontvangstdatum: "22-08-2017", parafenlijn: "H/H/J", volgnummer: "1"},
        {onderwerp: "Klachtenbrief", werkmapnummer: "876290111", ontvangstdatum: "09-09-2017", parafenlijn: "DESK/P via S", volgnummer: "2"},
        {onderwerp: "Antwoord", werkmapnummer: "333388467", ontvangstdatum: "14-09-2017", parafenlijn: "M", volgnummer: "3"}
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
    if(nodeData.length == 0){
        //We do nothing in this case, the user has clicked in the grid but not selected a row.
        //Retrieving the selected rowData would yield an error.
    } else{
    let onderwerp = nodeData["0"].data.onderwerp;
    this.clickingrid.emit(onderwerp);
    }
}

}
