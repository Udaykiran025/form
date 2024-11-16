/*global QUnit*/

sap.ui.define([
	"commitform1appl/form/controller/Form1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Form1 Controller");

	QUnit.test("I should test the Form1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
