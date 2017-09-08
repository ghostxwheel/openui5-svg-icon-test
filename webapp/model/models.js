sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createJSONModel: function () {
			var oModel = new JSONModel({
				size: "50",
				numOfIcons: "5",
				icons: []
			});
			oModel.setSizeLimit(10000);
			return oModel;
		}

	};
});