sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
    
	
],
function (Controller, JSONModel,MessageBox ) {
    "use strict";

    return Controller.extend("com.mit.form1.appl.form.controller.Preview", {
        
        onInit: function () {
            debugger
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Preview").attachPatternMatched(this._onObjectMatched, this);
            
        },
       
        _onObjectMatched: function(oEvent) {
            debugger
            var sFormData = oEvent.getParameter("arguments").formData;
            var aFormData = JSON.parse(sFormData);
            //var firstname_new = aFormData[0]._IDGenInput1;
           
            console.log("before  parse"+sFormData);
            console.log("Hiiii555"+aFormData[0]._IDGenInput1);
           
           var oModel = new JSONModel({
                formData: aFormData,
                
        
            });
           // var oModel = this.getView().getModel();
           oModel.setProperty("/firstname_new", aFormData[0]._IDGenInput1);
           oModel.setProperty("/dob_new", aFormData[0].datePicker);
           oModel.setProperty("/mobile_new", aFormData[0]._IDGenInput834);
           oModel.setProperty("/email_new", aFormData[0]._IDGenInput34);
           oModel.setProperty("/aadhar_new", aFormData[0]._IDGenInput134);
           oModel.setProperty("/course_new", aFormData[0]._IDMAL194);
           oModel.setProperty("/passout_new", aFormData[0]._IDMAL17828);
           oModel.setProperty("/specialization_new", aFormData[0]._IDMAL12864);
           oModel.setProperty("/cgpa_new", aFormData[0]._IDGenInput84);
           oModel.setProperty("/university_new", aFormData[0]._IDGenInput384);
           oModel.setProperty("/Resume_new", aFormData[0].fileUploader);
                 
            this.getView().setModel(oModel);

        },
        osubmitbut1: function(){
            debugger
            MessageBox.show(
              "Data Submitted Successfully", {
                  icon: MessageBox.Icon.SUCCESS,
                  title: "Message Box",
                  actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
                  emphasizedAction: MessageBox.Action.YES,
                  onClose: function (oAction) { / * do something * / }
              }
              )
      
          }
             
        
    });
});