import { Component, Output, EventEmitter } from '@angular/core';
import { GridOptions } from 'ag-grid/main';

@Component({
    selector: 'aggrid',
    templateUrl: 'aggrid.html'
})
export class AggridComponent {
    public gridOptions: GridOptions;
    public rowData: any[];
    public columnDefs: any[];

    @Output() clickingrid = new EventEmitter();

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.columnDefs = [
            { headerName: "Onderwerp", field: "onderwerp" },
            { headerName: "Werkmapnummer", field: "werkmapnummer" },
            { headerName: "Ontvangstdatum", field: "ontvangstdatum" },
            { headerName: "Parafenlijn", field: "parafenlijn" },
            { headerName: "Volgnummer", field: "volgnummer" }
        ];
        this.rowData = [
            { onderwerp: "WOB verzoek ABCD", werkmapnummer: "20170005948", ontvangstdatum: "15-08-2017", parafenlijn: "FASAM", volgnummer: "1" },
            { onderwerp: "Burgerbrief nr 1", werkmapnummer: "20170005498", ontvangstdatum: "15-09-2017", parafenlijn: "C/IA hernoemd", volgnummer: "2" },
            { onderwerp: "Inkoop, inhuur, gunning J. Jansen", werkmapnummer: "20170005497", ontvangstdatum: "14-09-2017", parafenlijn: "BABD", volgnummer: "3" }
        ];
        this.handleGridReady();
    }

    private handleGridReady() {
        this.gridOptions = {
            columnDefs: this.columnDefs,
            rowData: this.rowData,
            enableColResize: true,
            floatingFilter: true,
            floatingFiltersHeight: 50,
            enableSorting: true,
            rowSelection: 'single'
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
