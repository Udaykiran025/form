sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    
    "sap/ui/model/json/JSONModel",
    
    
	
],
function (Controller, MessageBox, MessageToast,JSONModel) {
    "use strict";

    return Controller.extend("com.mit.form1.appl.form.controller.Form1", {
        
        onInit: function () {
          
        debugger
        var oRadioButtonGroup = this.byId("rbg2");


        var oDatePicker = this.byId("datePicker");
        var oDefaultDate = new Date("jan,21,2006");
        
          var oModel = new JSONModel({
            Name: "Uday",
            Mobile: "998989999",
            Email: "vhavsd@gmail.com",
            Aadhar: "938484843733",
            Coursekey: "BTECH",
            Specialization: "MECH",
            University: "Vignan",
            Passout: "2023",
            CGPA: "9.5"
          });
          this.getView().setModel(oModel);
          oDatePicker.setDateValue(oDefaultDate);

          var oDatePicker = this.byId("datePicker");
          var oMinDate = new Date("1995-01-01");
          var oMaxDate = new Date("2006-12-31");
          oDatePicker.setMinDate(oMinDate);
          oDatePicker.setMaxDate(oMaxDate);

          var defaultIndex = 0; 
          oRadioButtonGroup.setSelectedIndex(defaultIndex);
      
        },
      

        handlePreview: function(){
            debugger
            var oView = this.getView();
            var oNameInput = oView.byId("_IDGenInput1");
            var oDobInput = oView.byId("datePicker");
            var oMobileInput = oView.byId("_IDGenInput834");
            var oEmailInput = oView.byId("_IDGenInput34");
            var oAadharInput = oView.byId("_IDGenInput134");
           // var oGenderInput = oView.byId("rbg2");
            var oCourseInput = oView.byId("_IDMAL194");
            var oPassoutInput = oView.byId("_IDMAL17828");
            var oSpecializationInput = oView.byId("_IDMAL12864");
            var oCgpaInput = oView.byId("_IDGenInput84");
            var oUniversityInput = oView.byId("_IDGenInput384");
            var oFileUploader = oView.byId("fileUploader");

        if (!oNameInput.getValue() ||
            !oDobInput.getValue() ||
            !oMobileInput.getValue() ||
            !oEmailInput.getValue() ||
            !oAadharInput.getValue() ||  
           // !oGenderInput.getValue() ||         
            !oCourseInput.getSelectedKey() ||
            !oPassoutInput.getSelectedKey() ||
            !oSpecializationInput.getSelectedKey() ||
            !oCgpaInput.getValue() ||
            !oUniversityInput.getValue() ||
            !oFileUploader.getValue()) {
          //sap.m.MessageToast.show("Please fill out all required fields.");

          MessageBox.show(
            "Please fill out all required fields.", {
                icon: MessageBox.Icon.ERROR,
                title: "Message Box",
                actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
                emphasizedAction: MessageBox.Action.YES,
                onClose: function (oAction) { / * do something * / }
            }
            )
          return;
        }
        
       

        var aFormData = [];
        var oFormData = {
            _IDGenInput1: oNameInput.getValue(),
            datePicker: oDobInput.getValue(),
            _IDGenInput834: oMobileInput.getValue(),
            _IDGenInput34: oEmailInput.getValue(),
            _IDGenInput134: oAadharInput.getValue(),
            //rbg2: oGenderInput.getValue(),          
            _IDMAL194: oCourseInput.getSelectedKey(),
            _IDMAL17828: oPassoutInput.getSelectedKey(),
            _IDMAL12864: oSpecializationInput.getSelectedKey(),
            _IDGenInput84: oCgpaInput.getValue(),
            _IDGenInput384: oUniversityInput.getValue(),
            fileUploader: oFileUploader.getValue()
            
        };

        aFormData.push(oFormData);

        var oRouter = this.getOwnerComponent().getRouter(); 
        oRouter.navTo("Preview",{
            
              formData: JSON.stringify(aFormData)
            //ProductId:evt.getSource().getCells()[0].getText()
        });

       /* this._resetForm();*/

        //sap.m.MessageToast.show("Registration successful!");
        /*MessageBox.show(
            "Data Submitted Successfully", {
                icon: MessageBox.Icon.SUCCESS,
                title: "Message Box",
                actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
                emphasizedAction: MessageBox.Action.YES,
                onClose: function (oAction) { / * do something * / }
            }
            )*/
      },

      /*_resetForm: function() {
        var oView = this.getView();
        oView.byId("_IDGenInput1").setValue("");
        oView.byId("_IDGenInput834").setValue("");
        oView.byId("_IDGenInput34").setValue("");
        oView.byId("_IDGenInput134").setValue("");       
        oView.byId("_IDMAL194").setSelectedKey("");
        oView.byId("_IDMAL17828").setSelectedKey("");
        oView.byId("_IDMAL12864").setSelectedKey(""); 
        oView.byId("_IDGenInput84").setValue("");
        oView.byId("_IDGenInput384").setValue("");
        oView.byId("fileUploader").setValue("");
      },*/

      handleUploadPress: function(){
        var oView = this.getView();
      var oFileUploader = oView.byId("fileUploader");

     
      if (!oFileUploader.getValue()) {
        MessageToast.show("Please choose a file.");
        return;
      }
      oFileUploader.upload();
    },

    handleUploadComplete: function(oEvent) {
      var sResponse = oEvent.getParameter("response");
      if (sResponse) {
        MessageToast.show("File uploaded successfully.");
      } else {
        MessageToast.show("File upload failed.");
      }
    },

   /* osubmitbut: function(){
      MessageBox.show(
        "Data Submitted Successfully", {
            icon: MessageBox.Icon.SUCCESS,
            title: "Message Box",
            actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
            emphasizedAction: MessageBox.Action.YES,
            onClose: function (oAction) { / * do something * / }
        }
        )

    }*/
  
    });
  });


            
    