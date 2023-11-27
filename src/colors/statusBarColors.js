const theme = require("../theme");

// Status Bar Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors

module.exports = {
  "statusBar.background": theme.backgroundDark,
  "statusBar.foreground": theme.foregroundDark,
  "statusBar.debuggingBackground": theme.background,
  "statusBar.debuggingForeground": theme.foreground,
  "statusBar.noFolderForeground": theme.foregroundDark,
  "statusBar.noFolderBackground": theme.background,
  "statusBarItem.activeBackground": theme.background,
  "statusBarItem.hoverBackground": theme.background,
  "statusBarItem.hoverForeground": theme.green,
  "statusBarItem.prominentBackground": theme.background,
  "statusBarItem.prominentHoverBackground": theme.background,
  "statusBar.border": theme.backgroundLight,
  "statusBarItem.remoteBackground": theme.backgroundDark,
  "statusBarItem.remoteForeground": theme.foregroundDark,
  "statusBarItem.remoteHoverBackground": theme.green,
  "statusBarItem.remoteHoverForeground": theme.background,
};
