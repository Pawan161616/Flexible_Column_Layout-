sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("flexiblecollayout.controller.View1", {
            onInit: function () {
                 var oModel = new sap.ui.model.json.JSONModel();
                 $.getJSON("http://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json",
                 function(result){
                   var data = result.value;
                   oModel.setData(data);
                   debugger;
                 });
            },


            onNav: function(event){

                // to set app layout in two columns mid expanded layout when clicked on any list item 
              var oFCL = this.getView().getParent().getParent();
              oFCL.setLayout(sap.f.LayoutType.TwoColumnsMidExpanded);

              var oSource = event.getSource();
              var sPath = oSource.getBindingContextPath();
              var ProductID = sPath.substr(sPath.length-2).charAt(0);
              var oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RDetails",{
//ID is the name we pass as a paratmeter and same mentioned in manifest file
                  ID: ProductID
              });
            },
            onSearch: function(oEvent){
                var oTable = this.getView().byId("IdProductList");
               
                var sQuery = oEvent.getParameter("query");
                if(sQuery && sQuery.length>0){
                   var oTableProductName = [new Filter("ProductName", FilterOperator.Contains,sQuery)];
                }
                oTable.getBinding("items").filter(oTableProductName);
            }

        });
    });
