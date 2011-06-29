
exports.main = function() {
  require("toolbarbutton").ToolbarButton({
    id: "greader-panel",
    label: "GReader",
    image: "http://www.google.com/reader/ui/favicon.ico",
    panel: require("panel").Panel({
      width: 400,
      height: 550,
      contentURL: "http://www.google.com/reader/i"
    })
  });
}