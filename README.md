# ArifCode Theme

Modern, elegant and accessible theme for VS Code.

## Installation
### With Git Clone
1. Clone this repository
```bash
git clone https://github.com/arifbudimanarrosyid/arifcode-theme
```

2. Install VSCE
```bash
npm install -g vsce
```

3. Build the extension
```bash
npm run build
```

4. Package the extension
```bash
vsce package
```

5. Install the extension

```bash
code --install-extension generated-filename.vsix
```
### With VSIX
1. Download the latest [release](https://github.com/arifbudimanarrosyid/arifcode-theme/releases)
2. Install the extension
```bash
code --install-extension generated-filename.vsix
```
### With VS Code
1. Open the Extensions sidebar in VS Code
2. Search for `ArifCode Theme`
3. Click `Install`

![Image 4](images/image4.png)

## Preview

![Image 1](images/image1.png)
![Image 2](images/image2.png)
![Image 3](images/image3.png)

## Recommended Settings
### settings.json
```json
{
    "editor.fontFamily": "JetBrains Mono",
    "editor.fontLigatures": true,
    "editor.lineHeight": 2.15,
    "workbench.productIconTheme": "fluent-icons",
    "workbench.activityBar.visible": false,
    "workbench.statusBar.visible": false,
    "window.menuBarVisibility": "compact",
    "workbench.editor.showTabs": false,

}
```

### keybindings.json
```json
[
    {
        "key": "alt+b",
        "command": "workbench.action.toggleActivityBarVisibility"
    },
    {
        "key": "alt+m",
        "command": "workbench.action.toggleMenuBar"
    },
    {
        "key": "alt+n",
        "command": "workbench.action.toggleStatusbarVisibility"
    }
]

```