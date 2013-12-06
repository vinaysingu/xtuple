/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
strict:true, trailing:true, white:true */
/*global XT:true */

(function () {
  "use strict";

  var lang = XT.stringsFor("en_US", {
    "_itemSource": "Item Source",
    "_itemSources": "Item Sources",
    "_purchasing": "Purchasing",
    "_purchaseOrder": "Purchase Order",
    "_purchaseOrderLine": "Purchase Order Line",
    "_purchaseOrderWorkflow": "Purchase Workflow",
    "_purchaseOrders": "Purchase Orders",
    "_purchaseType": "Purchase Type",
    "_purchaseTypes": "Purchase Types",
    "_releaseDate": "Release Date",
    "_vouchered": "Vouchered"
  });

  if (typeof exports !== 'undefined') {
    exports.language = lang;
  }
}());
