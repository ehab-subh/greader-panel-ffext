exports.main = function(options) {
  // create the toolbar buton
  var tbb = require("toolbarbutton").ToolbarButton({
    id: "greader-panel",
    label: "GReader",
    image: "http://www.google.com/reader/ui/favicon.ico",
    panel: require("panel").Panel({
      width: 400,
      height: 550,
      contentURL: "m.google.com/plus"
    })
  });

  // move the toolbar button to the addon-bar
  if ("install" == options.loadReason) {
    tbb.moveTo({toolbarID: "nav-bar"});
  }
}