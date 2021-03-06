// Generated by CoffeeScript 1.3.1
(function() {
  var TIMEOUT, Wd, WdWrap, config, should, wd, _ref;

  _ref = require('../../index'), wd = _ref.wd, Wd = _ref.Wd, WdWrap = _ref.WdWrap;

  should = require('should');

  config = null;

  try {
    config = require('./config');
  } catch (err) {

  }

  TIMEOUT = 180000;

  describe("wd-sauce", function() {
    return describe("sauce tests", function() {
      return describe("WdWrap", function() {
        it("checking config", function(done) {
          should.exist(config, 'you need to configure your sauce username and access-key ' + 'in the file config.coffee.');
          return done();
        });
        describe("passing browser", function() {
          var browser;
          browser = null;
          it("initializing browser", function(done) {
            this.timeout(TIMEOUT);
            browser = wd.remote("ondemand.saucelabs.com", 80, config.saucelabs.username, config.saucelabs['access-key'], {
              mode: 'sync'
            });
            return done();
          });
          return it("browsing", WdWrap({
            "with": function() {
              return browser;
            },
            pre: function() {
              return this.timeout(TIMEOUT);
            }
          }, function() {
            var desired, queryField;
            desired = {
              platform: "LINUX",
              name: "wd-sync sauce test",
              browserName: 'firefox'
            };
            this.init(desired);
            this.get("http://google.com");
            this.title().toLowerCase().should.include('google');
            queryField = this.elementByName('q');
            this.type(queryField, "Hello World");
            this.type(queryField, "\n");
            this.setWaitTimeout(3000);
            this.elementByCss('#ires');
            this.title().toLowerCase().should.include('hello world');
            return this.quit();
          }));
        });
        return describe("without passing browser", function() {
          var browser;
          browser = null;
          WdWrap = WdWrap({
            "with": function() {
              return browser;
            },
            pre: function() {
              return this.timeout(TIMEOUT);
            }
          });
          it("initializing browser", function(done) {
            this.timeout(TIMEOUT);
            browser = wd.remote("ondemand.saucelabs.com", 80, config.saucelabs.username, config.saucelabs['access-key'], {
              mode: 'sync'
            });
            return done();
          });
          return it("browsing", WdWrap(function() {
            var desired, queryField;
            desired = {
              platform: "LINUX",
              name: "wd-sync sauce test",
              browserName: 'firefox'
            };
            this.init(desired);
            this.get("http://google.com");
            this.title().toLowerCase().should.include('google');
            queryField = this.elementByName('q');
            this.type(queryField, "Hello World");
            this.type(queryField, "\n");
            this.setWaitTimeout(3000);
            this.elementByCss('#ires');
            this.title().toLowerCase().should.include('hello world');
            return this.quit();
          }));
        });
      });
    });
  });

}).call(this);
