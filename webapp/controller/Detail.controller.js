sap.ui.define([
    "sap/ui/core/mvc/Controller"
],function(Controller){
    return Controller.extend("flexiblecollayout.controller.Detail",{
         onInit: function(){
            
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({"Product":[]});
            this.getView().setModel(oModel,"locModel");
            
             var oRouter = this.getOwnerComponent().getRouter();
             oRouter.getRoute("RDetails").attachMatched(this._onObjectMatched.bind(this));
         },
         _onObjectMatched: function(oEvent){
             var sId = oEvent.getParameters().arguments.ID;
            var sPath = `/Products(${sId})`;
             this.getView().bindElement(sPath,{
                 expand: "Category"
             });


        //     var oDataModel = this.getView().getModel();
        //     oDataModel.read(sPath,{success: function(oData,error){
                
        //          var payload = {
        //              "ProductID":oData.ProductID,
        //              "ProductName":oData.ProductName,
        //              "QuantityPerUnit":oData.QuantityPerUnit,
        //              "UnitPrice":oData.UnitPrice
        //          };
        //          this.getView().getModel("locModel").setProperty("/Product",payload);
        //     }.bind(this)
        // });

         }
    });
});