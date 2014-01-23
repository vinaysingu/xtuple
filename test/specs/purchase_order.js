/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XV:true, XT:true, _:true, console:true, XM:true, Backbone:true, require:true, assert:true,
setTimeout:true, before:true, clearTimeout:true, exports:true, it:true, describe:true, beforeEach:true */

(function () {
  "use strict";

  var async = require("async"),
    _ = require("underscore"),
    common = require("../lib/common"),
    assert = require("chai").assert;
  /**
    A Purchase Order is a written authorization used to formalize purchase transactions with Vendor
    @class
    @alias PurchaseOrder
    @property {String} number that is the documentKey and idAttribute
    @property {String} status
    @property {Date} orderDate
    @property {Date} releaseDate
    @property {Vendor} vendor
    @property {Terms} terms
    @property {ShipVia} ShipVia
    @property {String} notes
    @property {Freight} freight
    @property {Boolean} isPrinted
    @property {Site} site defaults to User preferred site
    @property {Address} shiptoAddress defaults to the address of the Ship To Site
    @property {Contact} shiptoContact defaults to the contact of the Ship To Site
    @property {UserAccount} agent
    @property {Currency} currency
    @property {TaxZone} taxZone
    @property {TaxType} taxType
    @property {Number} subtotal
    @property {Number} freightSubtotal
    @property {Number} taxTotal
    @property {Number} total
    @property {Characteristics} Characteristics
    @property {PurchaseOrderLine} LineItems
    @property {PurchaseOrderWorkflow} Workflow
    @property {PurchaseOrderComment} Comments
    @property {PurchaseType} purchaseType
    @property {Boolean} isDropShip
    @property {SalesOrder} salesorder Linked sales order
  */
  var spec = {
    recordType: "XM.PurchaseOrder",
    skipCrud: true,
    skipSmoke: true,
    collectionType: "XM.PurchaseOrderListItemCollection",
    cacheName: null,
    listKind: "XV.PurchaseOrderList",
    instanceOf: "XM.Document",
    /**
      @member -
      @memberof PurchaseOrder
      @description Purchase Orders are lockable.
    */
    isLockable: true,
    /**
      @member -
      @memberof PurchaseOrder
      @description The ID attribute is "number", which will be automatically uppercased.
    */
    idAttribute: "number",
    enforceUpperKey: true,
    requiredAttributes: ["number", "status", "orderDate", "vendor", "currency"],
    attributes: ["id", "uuid", "number", "status", "orderDate", "releaseDate", "vendor",
    "incoterms", "shipVia", "notes", "freight", "isPrinted", "terms", "site", "agent", "currency",
    "taxZone", "taxType", "vendorAddress", "vendorAddress1", "vendorAddress2",
    "vendorAddress3", "vendorCity", "vendorState", "vendorPostalCode", "vendorCountry",
    "vendorContact", "vendorContactHonorific", "vendorContactFirstName",
    "vendorContactMiddleName", "vendorContactLastName", "vendorContactSuffic",
    "vendorContactPhone", "vendorContactTitle", "vendorContactFax", "vendorContactEmail",
    "shiptoAddress", "shiptoAddress1", "shiptoAddress2", "shiptoAddress3", "shiptoCity",
    "shiptoState", "shiptoPostalCode", "shiptoCountry", "shiptoContact", "shiptoContactHonorific",
    "shiptoContactFirstName", "shiptoContactMiddleName", "shiptoContactLastName",
    "shiptoContactSuffix", "shiptoContactPhone", "shiptoContactTitle", "shiptoContactFax",
    "shiptoContactEmail", "subtotal", "freightSubtotal", "taxTotal", "total", "characteristics",
    "workflow", "comments", "lineItems", "purchaseType", "isDropShip", "salesOrder"],
    /**
      @member -
      @memberof PurchaseOrder
      @description Used in the Purchasing module
    */
    extensions: ["purchasing"],
    /**
      @member -
      @memberof PurchaseOrder
      @description Purchase Orders can be read by people with "ViewPurchaseOrders"
       and can be created, updated, or deleted by users with the "MaintainPurchaseOrders" privilege
    */
    privileges: {
      createUpdateDelete: "MaintainPurchaseOrders",
      read: "ViewPurchaseOrders"
    },
    createHash: {
      vendor: { number: "TPARTS"}
    }
  };
  var additionalTests = function () {
    /**
      @member -
      @memberof PurchaseOrder
      @description ShipVia, Terms and TaxZone should be populated corresponding to the selecting vendor
    */
    it.skip("ShipVia, Terms and TaxZone should be populated corresponding to the selecting vendor", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description Comments panel should exist to add new comments to the Purchase Order
    */
    it.skip("Comments panel should exist to add new comments to the Purchase Order", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description For Purchase Orders linked to Sales orders, Sales order number should be displayed
    and should be uneditable
    */
    it.skip("For Purchase Orders linked to Sales orders, Sales order number should be displayed" +
    "and should be uneditable", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description Drop ship option should be corresponding to the selection made in the linked sales
    order and should be read only
    */
    it.skip("Drop ship option should be corresponding to the selection made in the linked sales" +
    "order and should be read only", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description For Purchase orders with foreign vendors subtotal, freight subtotal, freight, tax
    and Total should be displayed both in base currency and foreign currency
    */
    it.skip("For Purchase order with foreign vendors subtotal, freight subtotal, freight, tax" +
    "and Total should be displayed both in base currency and foreign currency", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description Currency picker should be changed to read only on adding a line item to a new
    Purchase order
    */
    it.skip("Currency picker should be changed to read only on adding a line item to a new " +
    "Purchase order", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description Following fields should be recalculated on adding a new line item: subtotal,
      freight subtotal, freight, tax and Total
    */
    it.skip("Following fields should be recalculated on adding a new line item: subtotal," +
    "freight subtotal, freight, tax and Total", function () {
    });
        describe("Purchase Order workflow", function () {
      /**
        @member -
        @memberof PurchaseOrder
        @description Workflows can be added, edited and removed from a new Purchase Order
      */
      it.skip("Workflows can be added, edited and removed from a new Purchase Order", function () {
      });
      /**
        @member -
        @memberof PurchaseOrder
        @description Workflows can be added, edited and removed from an existing Purchase Order
      */
      it.skip("Workflows can be added, updated and removed to an existing Purchase Order",
      function () {
      });
      /**
        @member -
        @memberof PurchaseOrder
        @description Purchase Orders cannot be saved with incomplete workflows
      */
      it.skip("Purchase Orders cannot be saved with incomplete workflows", function () {
      });
      /**
        @member -
        @memberof PurchaseOrder
        @description When a workflow item is completed or deferred, the Status of the Purchase
          order will be set to be the applicable target Status of the workflow item
      */
      it.skip("When a workflow item is completed or deferred, the Status of the Purchase" +
      "order will be set to be the applicable target Status of the workflow item'", function () {
      });
      /**
        @member -
        @memberof PurchaseOrder
        @description When a Purchase Type with workflow items is changed to another Purchase Type on
        the PO, a confirmation dialog for overwriting the workflow should be displayed
       */
      it.skip("When a Purchase Type with workflow items is changed to another Purchase Type on" +
      "the PO, a confirmation dialog for overwriting the workflow should be displayed.",
      function () {
      });
      /**
        @member -
        @memberof PurchaseOrder
        @description - Selecting 'Yes' in the confirmation dialog should replace the workflows with the
        workflows on the changed Purchase Type
      */
      it.skip("Selecting 'Yes' in the confirmation dialog should replace the workflows with the" +
      "workflows on the changed Purchase Type", function () {
      });
      /**
        @member -
        @memberof PurchaseOrder
        @description - Selecting 'No' in the confirmation dialog should not change the workflows
      */
      it.skip("Selecting 'No' in the confirmation dialog should not change the workflows",
      function () {
      });
      /**
        @member -
        @memberof PurchaseOrder
        @description For the Workflow items copied from the Purchase types, the start date and due date
        should be calculated correctly based on the offset
      */
      it.skip("For the Workflow items copied from the Purchase types, the start date and due date " +
        "should be calculated correctly based on the offset", function () {
      });
    });
    /**
      @member -
      @memberof PurchaseOrder
      @description Characteristics can be assigned as being for Purchase Orders
    */
    describe.skip("Purchase ordercharacteristics", function () { //Please verify it
      it("XM.Characteristic includes isPurchaseOrders as a context attribute", function () {
        var characteristic = new XM.Characteristic();
        assert.include(characteristic.getAttributeNames(), "isPurchaseOrders");
      });
      /**
        @member PurchaseOrderCharacteristic
        @memberof PurchaseOrder
        @description Follows the convention for characteristics
        @see Characteristic
      */
      it("convention for characteristic assignments", function () {
        var model;

        assert.isFunction(XM.PurchaseOrderCharacteristic);
        model = new XM.PurchaseOrderCharacteristic();
        assert.isTrue(model instanceof XM.CharacteristicAssignment);
      });
      it("can be set by a widget in the characteristics workspace", function () {
        var characteristicWorkspace = new XV.CharacteristicWorkspace();
        assert.include(_.map(characteristicWorkspace.$, function (control) {
          return control.attr;
        }), "isPurchaseOrders");
      });
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description Purchase orders should be multi selectable in the Purchase Orders List
    */
    it.skip("Purchase orders should be multi selectable in the Purchase Orders List", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description Purchase orders should be multi selectable in the Purchase Orders List
    */
    it.skip("Purchase orders should be multi selectable in the Purchase Orders List", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description Release and Delete options should be active on selecting a 'unreleased'
    PO in the Purchase Orders list and should be inactive for 'Open' POs
    */
    it.skip("Release and Delete options should be active on selecting a 'unreleased'" +
    "PO in the Purchase Orders list and should be inactive for 'Open' POs", function () {
    });
    /**
    @member -
    @memberof PurchaseOrder
    @description Unrelease option should be active for Open POs and should be inactive for
    Unreleased POs and the POs for which receipt is created/posted
    */
    it.skip("Unrelease option should be active for Open POs and should be inactive for " +
    "Unreleased POs and the POs for which receipt is created/posted", function () {
    });
  };
  exports.spec = spec;
  exports.additionalTests = additionalTests;
}());