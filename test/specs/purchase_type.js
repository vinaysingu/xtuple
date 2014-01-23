/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XV:true, XT:true, _:true, console:true, XM:true, Backbone:true, require:true, assert:true,
setTimeout:true, before:true, clearTimeout:true, exports:true, it:true, describe:true, beforeEach:true */

(function () {
  "use strict";

  /**
    @class
    @alias PurchaseType
    @property {String} Name
    @property {String} Description
  */
  var spec = {
    recordType: "XM.PurchaseType",
    skipCrud: true, //PurchaseType creation fails in crud test
    collectionType: "XM.PurchaseTypeCollection",
    cacheName: "XM.purchaseTypes",
    listKind: "XV.PurchaseTypeList",
    instanceOf: "XM.Model",
    /**
      @member -
      @memberof PurchaseType
      @description Purchase Types are lockable.
    */
    isLockable: true,
    /**
      @member -
      @memberof PurchaseType
      @description The ID attribute is "code", which will not be automatically uppercased.
    */
    idAttribute: "code",
    enforceUpperKey: false,
    attributes: ["id", "code", "isActive", "description", "emailProfile", "characteristics", "workflow"],
    requiredAttributes: ["code"],
    /**
      @member -
      @memberof PurchaseType
      @description Purchase Types can be read by all users and can be created, updated,
        or deleted by users with the "MaintainPurchaseTypes" privilege.
    */
    privileges: {
      createUpdateDelete: "MaintainPurchaseTypes",
      read: true
    },
    createHash: {
      code: "TestPurchaseType" + Math.random(),
      isActive: true,
      description: "Test Purchase Type"
    },
    updatableField: "description"
  };
  var additionalTests = function () {
  /**
      @member -
      @memberof PurchaseType
      @description Workflows can be added, edited and deleted to a new Purchase Type.
    */
    it.skip("Workflows can be added, edited and deleted to a new Purchase Type", function () {
    });
    /**
      @member -
      @memberof PurchaseType
      @description Workflows can be added, edited and deleted to a existing Purchase Type.
    */
    it.skip("Workflows can be added, edited and deleted to an existing Purchase Type", function () {
    });
    /**
      @member -
      @memberof PurchaseType
      @description Workflow Type should contain the following options: Other, Receive, Post Receipt
    */
    it.skip("Workflow Type should contain the following options: Other, Receive, Post Receipt",
    function () {
    });
    /**
      @member -
      @memberof PurchaseType
      @description Next Status picker in the Workflow should contain the following options: No Change,
      Unreleased, Open, Closed
    */
    it.skip("Next Status picker in the Workflow should contain the following options: No Change," +
    "Unreleased, Open, Closed", function () {
    });
  });
  exports.spec = spec;
  exports.additionalTests = additionalTests;
}());

