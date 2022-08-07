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
         sId:null,
         
         _onObjectMatched: function(oEvent){
            this.sId = oEvent.getParameters().arguments.ID;
            var sPath = `/Products(${this.sId})`;
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

         },
         onSupplierPress: function(oEvent){
             var sPath = oEvent.getSource().getBindingContext().getPath();
             var SupplierID = sPath.split("/")[1].slice(-2).charAt(0);
         
             var oRouter = this.getOwnerComponent().getRouter();
             oRouter.navTo("Rdetaildetail",{
                 ID:this.sId,
                 SupplierID:SupplierID
             });
         }
    });
});