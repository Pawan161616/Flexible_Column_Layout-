sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
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


            onNav: function(){
              var oFCL = this.getView().getParent().getParent();
              oFCL.setLayout(sap.f.LayoutType.TwoColumnsMidExpanded);
            }

        });
    });
