/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global describe:true, it:true, XT:true, XM:true, XV:true, process:true,
  module:true, require:true, exports:true */

(function () {
  "use strict";

  var crud = require('../lib/crud');

  /**
  Purchase Email
  @class
  @alias Purchase Email
  @property {String} name
  @property {String} description
  @property {String} from
  @property {String} replyTo
  @property {String} to
  @property {String} cc
  @property {String} bcc
  @property {String} subject
  @property {String} body
  **/

  var spec = {
      skipAll: true, //tests fail because of unassigned priviliges by default
      recordType: "XM.PurchaseEmailProfile",
      collectionType: "XM.PurchaseEmailProfileCollection",
      listKind: "XV.PurchaseEmailProfileList",
      cacheName: "XM.purchaseEmailProfiles",
      instanceOf: "XM.Model",
      requiredAttributes: ["name"],
      attributes: ["id", "name", "description", "from", "replyTo", "to", "cc", "bcc", "subject", "body"],
      idAttribute: "name",
      extensions: ["purchasing"],
      isLockable: false,
      
      privileges: {
        createUpdateDelete: "MaintainPurchaseEmailProfiles",
        read: true
      },
      createHash: {
        name: "PurchaseEmail" + Math.random(),
        description: "Email profile",
        from: "vinay@xyz.com",
        to: "vinay@xyz.com"
      },
      updatableField: "description"
    };

  exports.spec = spec;

}());