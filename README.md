# PASSION THEME

## Installation

- Open the Extensions sidebar in VS Code
- Search for Passion Theme
- Click Install and Reload
- Open the Command Palette with `Ctrl+Shift+P`
- Select Preferences: `Color Theme and choose a Passion variant`.
- Enjoy! 🎉 Also, check out some of the personalization options below...

<p align="center">
  <img alt="preview" src="https://i.imgur.com/BdcLdRh.png" width="90%">
</p>

## Personalization

VS Code makes it easy to customize just about every aspect of your editor.
If you want to change something, open the Command Palette with `Ctrl+Shift+P` and select **Preferences: Open Settings (JSON)**. You can then override VS Code's defaults or Passion's colors in the right side of the settings view.
Check out some of the personalization options below to customize Passion to suit your taste.

For more info on theming, visit the [Extension Authoring Guide](https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers) and [Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference).

### Sidebar Contrast

```
"workbench.colorCustomizations": {
  "activityBar.background": "#1E2028",
  "activityBar.border": "#1E2028",
  "sideBar.background": "#1E2028",
  "sideBar.border": "#1C1E26"
}
```

### Tag Brackets `<>`

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "HTML tag brackets",
      "scope": ["punctuation.definition.tag"],
      "settings": {
        "foreground": "#BBBBBB"
      }
    }
  ]
}
```

## License

[MIT](LICENSE) © [David Pastor](https://github.com/davidcreador)
