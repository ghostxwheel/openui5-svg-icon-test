sap.ui.define([
	"jquery.sap.global"
], function(jQuery) {
	"use strict";

	/**
	 * Font-Icon renderer.
	 * @namespace
	 * @alias com.greg.svgIconTest.control.SvgIconRenderer
	 */
	var _svgLoaded = false;
	var SvgIconRenderer = {};
	
	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
	 */
	SvgIconRenderer.render = function(oRm, oControl) {

		if (_svgLoaded === false) {
			
			var spriteData = jQuery.sap.loadResource({
				url: jQuery.sap.getModulePath("com.greg.svgIconTest.control", "/thirdparty/sprites2.svg"),
				dataType: "text",
				async: false
			});
			
			/*eslint-disable sap-no-dom-insertion*/
			jQuery("body").append("<div hidden>");
			jQuery("body").append(spriteData);
			jQuery("body").append("</div>");
			/*eslint-enable sap-no-dom-insertion*/
			
			_svgLoaded = true;
		}
		
		var sIcon = oControl.getIcon(),
			sWidth = oControl.getWidth(),
			sHeight = oControl.getHeight();
		
		oRm.write("<svg");
		
		oRm.writeControlData(oControl);
		oRm.addClass("icon");
		
		if (sWidth) {
			oRm.addStyle("width", sWidth);
		}

		if (sHeight) {
			oRm.addStyle("height", sHeight);
			oRm.addStyle("line-height", sHeight);
		}

		oRm.writeClasses();
		oRm.writeStyles();
		
		oRm.write(">");
		
		oRm.write("<use");
		oRm.writeAttribute("xlink:href", "#" + sIcon);
		oRm.write("/>");
		
		oRm.write("</svg>");

	};

	return SvgIconRenderer;

}, /* bExport= */ true);