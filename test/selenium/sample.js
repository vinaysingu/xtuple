/* global describe, it, before , beforeEach, after*/

var chai = require("chai");
chai.should();

var wd;
try {
  wd = require('wd');
} catch( err ) {
  console.log('install wd');
}

describe('mocha spec examples', function() {
  this.timeout(10000);

  //regular mocha usage is also an option
  describe("regular mocha usage", function() {
    var browser;

    before(function(done) {
      browser = wd.promiseChainRemote();
      //browser._debugPromise();
      browser.on('status', function(info) {
        console.log(info);
      });
      browser.on('command', function(meth, path, data) {
        console.log(' > ' + meth, path, data || '');
      });
      browser
        .init({browserName:'chrome'})
        .nodeify(done);  //same as : .then(function() { done(); });
    });

    beforeEach(function(done) {
      browser
        .get("https://pandora.xtuple.com")
        .nodeify(done);
    });

    after(function(done) {
      browser
        .quit()
        .nodeify(done);
    });

    it("should retrieve the page title", function(done) {
      browser
        .title()
        .then(function(title) {
          title.should.equal("xTuple Login");
        })
        .nodeify(done);
    });

    it("should verify the submit message", function(done) {
      /* jshint evil: true */
      browser
        .elementById("form-fields_loginButton")
        .click()
        .elementByXPath("//*[contains(text(),'Invalid username')]")
        .isDisplayed()
        .then(function(displayed) {
          displayed.should.be.true;
          })
        .nodeify(done);
    });
  });

});