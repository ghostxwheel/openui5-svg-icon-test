sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/greg/svgIconTest/control/SvgIconEnum"
], function(Controller, SvgIconEnum) {
	"use strict";

	return Controller.extend("com.greg.svgIconTest.controller.App", {
		onInit: function () {
			this.onRandomize();
		},
		
		onRandomize: function () {
			var oModel = this.getOwnerComponent().getModel();
			var nNumOfIcons = oModel.getProperty("/numOfIcons");
			var arrKeys = Object.keys(SvgIconEnum);
			var arrIcons = [];
			
			function getRandomArbitrary (min, max) {
			    return Math.random() * (max - min) + min;
			}
			
			while (nNumOfIcons-- > 0) {
				arrIcons.push({
					icon: arrKeys[ parseInt( getRandomArbitrary( 0, arrKeys.length ), 10 ) ]
				});
			}
			
			oModel.setProperty("/icons", arrIcons);
		}
	});
});