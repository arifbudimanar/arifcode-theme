const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  "editorWidget.background": theme.backgroundDark,
  "editorWidget.border": "#30373A",
  "editorSuggestWidget.background": theme.backgroundDark,
  "editorSuggestWidget.border": "#30373A",
  "editorSuggestWidget.foreground": theme.foreground,
  "editorSuggestWidget.highlightForeground": theme.green,
  "editorSuggestWidget.selectedBackground": "#30373A",
  "editorHoverWidget.background": theme.backgroundDark,
  "editorHoverWidget.foreground": theme.foreground,
  "editorHoverWidget.border": "#30373A",
  "editorHoverWidget.highlightForeground": theme.green,
  "editorHoverWidget.statusBarBackground": theme.backgroundDark,
  "debugExceptionWidget.background": theme.backgroundDark,
  "debugExceptionWidget.border": "#30373A",
  "editorMarkerNavigation.background": theme.backgroundDark,
  "editorMarkerNavigationError.background": theme.yellow,
  "editorMarkerNavigationWarning.background": theme.yellow
};
