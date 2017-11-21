import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { TabsPage } from './../../pages/tabs/tabs'

@Component({
    selector: 'huidigwerkgrid',
    templateUrl: 'huidigwerkgrid.html'
})
export class HuidigwerkgridComponent {
    public gridOptions: GridOptions;
    public rowData: any[];
    public columnDefs: any[];
    private gridApi;
    private gridColumnApi;

    @Input('inboxName') inboxNaam; 
    @Output() clickingrid = new EventEmitter();

    constructor(private tabs: TabsPage) {
        this.gridOptions = <GridOptions>{};
        this.columnDefs = [
            { headerName: "Onderwerp", field: "onderwerp" },
            { headerName: "Werkmapnummer", field: "werkmapnummer" },
            { headerName: "Ontvangstdatum", field: "ontvangstdatum" },
            { headerName: "Parafenlijn", field: "parafenlijn" },
            { headerName: "Volgnummer", field: "volgnummer" }
        ];
        this.rowData = [
            { onderwerp: "Dummyrij", werkmapnummer: "voor", ontvangstdatum: "initialisatie", parafenlijn: "van", volgnummer: "gridoptions" }
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
            rowSelection: 'single',
            suppressMovableColumns: true
        };
}

ngAfterViewInit(){
    this.rowData = [
        { onderwerp: "Data", werkmapnummer: "voor", ontvangstdatum: "inbox", parafenlijn: ":", volgnummer: this.inboxNaam },
        { onderwerp: "WOB verzoek ABCD", werkmapnummer: "20170005948", ontvangstdatum: "15-08-2017", parafenlijn: "FASAM", volgnummer: "1" },
        { onderwerp: "Burgerbrief nr 1", werkmapnummer: "20170005498", ontvangstdatum: "15-09-2017", parafenlijn: "C/IA hernoemd", volgnummer: "2" },
        { onderwerp: "Inkoop, inhuur, gunning J. Jansen", werkmapnummer: "20170005497", ontvangstdatum: "14-09-2017", parafenlijn: "BABD", volgnummer: "3" }
    ];
  console.log(document.querySelector(".ag-row"));
}

getTitleParam() {
    var nodeData = this.gridOptions.api.getSelectedNodes();
    if(nodeData.length == 0){
        //We do nothing in this case, the user has clicked in the grid but not selected a row.
        //Retrieving the selected rowData would yield an error.
    } else{
    let onderwerp = nodeData["0"].data.onderwerp;
    this.clickingrid.emit(onderwerp);
    }
}

onGridReady(params) {
    var gridOptions = this.gridOptions;
    var gridApi = gridOptions.api;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var columns = params.columnApi.getAllDisplayedVirtualColumns();
    var colIds = columns.map(function(column) {
      return column.colId;
    });
    var rowIndex = 0;
    var tabIndex = 0;
    columns.forEach(function(column) {
      var element = document.querySelector("div[col-id=" + column.colId + "] div.ag-header-cell-label");
      element.setAttribute("tabindex", tabIndex.toString());
      element.addEventListener("keydown", function(e) {
      var index = colIds.findIndex(function(colId) {
            return colId === column.colId;
          });
        if ((<KeyboardEvent>e).key === "Enter"){
            var sort = [
                {
                  colId: column.colId,
                  sort: ['asc','desc']
                }
              ];
              params.api.setSortModel(sort);
        }
        if ((<KeyboardEvent>e).key === "ArrowRight") {
          if (index === -1 || index === colIds.length - 1) {
            index = 0;
          } else {
            index = index + 1;
          }
        }
        if ((<KeyboardEvent>e).key === "ArrowLeft"){
              if (index === -1 || index === 0) {
                index = colIds.length - 1;
              } else {
                index = index - 1;
              }
        }
        var nextElement = document.querySelector("div[col-id=" + colIds[index] + "] div.ag-header-cell-label");
        (<HTMLElement>nextElement).focus();
        e.preventDefault(); 
        var nextRow;

        if ((<KeyboardEvent>e).key === "ArrowDown"){
            if (rowIndex === gridApi.getRenderedNodes().length){
                rowIndex = 1;
                nextRow = gridApi.getRenderedNodes()[0];
                nextRow.setSelected(true, false);
            } else {
                nextRow = gridApi.getRenderedNodes()[rowIndex++];
                nextRow.setSelected(true, false);
            }
        }
        if ((<KeyboardEvent>e).key === "ArrowUp"){
            if (rowIndex === 0){
                var deSelectRow0 = gridApi.getRenderedNodes()[rowIndex];
                deSelectRow0.setSelected(false, false);
                nextElement = document.querySelector("div[col-id=" + colIds[0] + "] div.ag-header-cell-label");
                (<HTMLElement>nextElement).focus();
                e.preventDefault();
            if( rowIndex === gridApi.getRenderedNodes().length){
                nextRow = gridApi.getRenderedNodes()[rowIndex - 2];
                nextRow.setSelected(true, false);
            }
            } else {
                console.log(rowIndex);
                nextRow = gridApi.getRenderedNodes()[--rowIndex];
                nextRow.setSelected(true, false);
            }
        }
      });
    });
    }

    escapeGrid(){
    this.tabs.escapeGrid();
    }
  }