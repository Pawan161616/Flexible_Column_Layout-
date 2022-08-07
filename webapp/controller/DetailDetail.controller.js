sap.ui.define([
    'sap/ui/core/mvc/Controller'
],function(Controller){
    return Controller.extend("flexiblecollayout.controller.DetailDetail",{
        onInit: function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("Rdetaildetail").attachPatternMatched(this._onPatternMatched,this);
        },
        _onPatternMatched: function(oEvent){
           this._supplierId = oEvent.mParameters.arguments.SupplierID;
           var sPath = `/Suppliers(${this._supplierId})`;
           this.getView().bindElement(sPath);
        }

    });
});