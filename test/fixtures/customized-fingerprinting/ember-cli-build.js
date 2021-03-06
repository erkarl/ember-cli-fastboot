/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      prepend: 'https://totally-sick-cdn.example.com/',
      generateAssetMap: true,
      assetMapPath: 'totally-customized-asset-map.json'
    }
  });

  return app.toTree();
};
