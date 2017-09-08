sap.ui.define([
	"sap/ui/core/Control",
	"com/greg/svgIconTest/control/SvgIconEnum"
], function (Control) {
	"use strict";
	
	return Control.extend("com.greg.svgIconTest.control.SvgIcon", {
		metadata : {
			properties : {
				
				/**
				 * This property should be set by the return value of calling sap.ui.core.IconPool.getIconURI with an Icon name parameter and an optional collection parameter which is required when using application extended Icons. A list of standard FontIcon is available here.
				 */
				icon: {type : "com.greg.svgIconTest.control.SvgIconEnum", group : "Data", defaultValue : null},
				
				/**
				 * This is the width of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
				 */
				width : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
	
				/**
				 * This is the height of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
				 */
				height : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
				
			},
			aggregations  : {},
			events : {}
		}
	});
});