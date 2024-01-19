# themer - color-theme

## Alacritty

1. Paste the contents of `Alacritty/Themer color-theme.yml` into your Alacritty config file.
2. Select the desired theme by setting the `colors` config key to reference the scheme's anchor (i.e., `colors: *light` or `colors: *dark`).

## Alfred

Simply open the files to import them into Alfred. Either double-click them in Finder or use the terminal:

```
open 'Alfred/themer-color-theme-dark.alfredappearance'
```

## BBEdit

Copy (or symlink) the generated file to `~/Library/Application Support/BBEdit/Color Schemes/`:

```
cp 'BBEdit/Themer color-theme Dark.bbColorScheme' '~/Library/Application Support/BBEdit/Color Schemes/'
```

## Brave

1. Launch Brave and go to `brave://extensions`.
2. Check the "Developer mode" checkbox at the top.
3. Click the "Load unpacked extension..." button and choose the desired theme directory (`Brave/Themer color-theme Dark`).

(To reset or remove the theme, visit `brave://settings` and click "Reset to Default" in the "Appearance" section.)

## Chrome

1. Launch Chrome and go to `chrome://extensions`.
2. Check the "Developer mode" checkbox at the top.
3. Click the "Load unpacked extension..." button and choose the desired theme directory (`Chrome/Themer color-theme Dark`).

(To reset or remove the theme, visit `chrome://settings` and click "Reset to Default" in the "Appearance" section.)

## CMD

Simply double-click the desired theme file to add the color keys to the registry:

* `CMD/themer-color-theme-dark.reg`

The scheme of CMD can then be configured with the `color` command. For example, use `color 07` to set the background and foreground to your color set's default.

## ConEmu

1. Open the ConEmu settings and navigate to Features > Colors. Take note of the location of `ConEmu.xml` for later.
2. Create a new color scheme by typing a name in the "Schemes" field and clicking Save.
3. Close ConEmu.
4. Open `ConEmu.xml` and locate the color scheme name you typed in step 2.
5. Replace the `<value>` elements `ColorTable00` through `ColorTable31` with the contents of your themer-generated XML (`ConEmu/themer-color-theme-dark.xml`). Be sure to leave the others, like `ExtendColors`, etc. intact.
6. Open ConEmu and select your theme again in settings.

## CSS

Import the generated theme file into your stylesheet via `@import()`, or into your HTML markup via `<link>`.

`hex.css` provides the theme colors in hex format; `rgb.css` and `hsl.css` in RGB and HSL formats respectively along with individual channel values for further manipulation if desired.

Generated files:

* `CSS/Themer color-theme - hex.css`
* `CSS/Themer color-theme - rgb.css`
* `CSS/Themer color-theme - hsl.css`

## Emacs

Copy (or symlink) the generated theme file into `~/.emacs.d/`:

```
cp 'Emacs/themer-color-theme-dark-theme.el' ~/.emacs.d/
```

Then load the desired theme in `init.el`:

```
(load-theme 'themer-color-theme-dark t)
```

## Firefox Add-on

To use the generated extension package, the code will need to be packaged up and signed by Mozilla.

To package the code in preparation for submission, the `web-ext` tool can be used:

```
npx web-ext build --source-dir 'Firefox Add-on/Themer color-theme Dark'
```

Then the package can be submitted to Mozilla for review in the [Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/addon/submit/distribution).

Learn more about Firefox themes from [extensionworkshop.com](https://extensionworkshop.com/documentation/themes/)

To theme Firefox without the need to create a developer account and go through the extension review process, see themer's integration with [Firefox Color](https://color.firefox.com).

## Hyper

First, copy (or symlink) the outputted package directory to the Hyper local plugins directory:

```
cp -R 'Hyper/hyper-themer-color-theme-dark' ~/.hyper_plugins/local/
```

Then edit `~/.hyper.js` and ad the package to the `localPlugins` array:

```
...
localPlugins: [
  'hyper-themer-color-theme-dark'
],
...
```

## iTerm

1. Launch iTerm
2. Press `command`-`I` to open the iTerm preferences
3. Choose "Colors" > "Color Presets..." > "Import..." and choose the generated theme file (`iTerm/Themer color-theme Dark.itermcolors`)
4. Select the desired theme in the "Color Presets..." menu.

## KDE Plasma Colors

1. Open System Settings
2. Navigate to Appearance > Colors
3. Click "Install from File..." and choose the generated theme file (`KDE Plasma Colors/ThemerColorThemeDark.colors`)

## Keypirinha

1. Open the Keypirinha Configuration:
    - Select **Keypirinha: Configure** item from the Keypirinha LaunchBox
    - Right-Click **Keypirinha** -> **Configure Keypirinha**
2. Add the contents of `Keypirinha/keypirinha-themer-color-theme-dark.ini` to the `Keypirinha.ini` file.
3. Set/Append the desired theme name ("ThemerColorThemeDarkColors") to the `theme` property under the `[gui]` section of the `Keypirinha.ini` file.

## Kitty

In the kitty configuration file (usually `~/.config/kitty/kitty.conf`), `include` the generated theme file:

* `Kitty/themer-color-theme-dark.conf`

## Konsole

Copy (or symlink) the generated files to `~/.local/share/konsole/`:

```
cp 'Konsole/themer-color-theme-dark.colorscheme' ~/.local/share/konsole/
```

Then choose the desired theme in Konsole > Settings > Edit Current Profile > Appearance.

## Prism

In the HTML page where prism.js is being used, link to the generated stylesheet (`Prism/prism-themer-color-theme-dark.css`).

## Sketch Palettes

Load the generated theme file into Sketch through the [sketch-palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin.

* `Sketch Palettes/sketch-palettes-themer-color-theme-dark.sketchpalette`

## Slack sidebar

Copy the contents of `Slack sidebar/themer-color-theme-dark.txt` and paste into the custom theme input in Slack's preferences.

## Sublime Text

1. Copy (or symlink) the generated theme files (`Sublime Text/Themer color-theme Dark.tmTheme`) to the `User/` packages folder (you can see where this folder is located by choosing the "Preferences: Browse Packages..." menu option from the Command Palette).
2. Open the Command Palette and choose "UI: Select Color Scheme"
3. Choose the theme ("Themer color-theme Dark") from the list of available color themes.

## Terminal

1. Launch Terminal.app and open the preferences (`cmd`-`,`)
2. Click Profiles > (...) icon > Import...
3. Choose the generated file (`Terminal/Themer color-theme Dark.terminal`)
4. Select the imported theme ("Themer color-theme Dark") from the profile picker

## Terminator

1. Copy the contents of `Terminator/terminator-themer-color-theme-dark.txt` to Terminator's config file. The config file is usually located at `~/.config/terminator/config`. You can paste it as a new profile, or copy the contents into your existing profile.
2. Restart Terminator to see the new theme.

## Vim

Copy or symlink `Vim/ThemerColorTheme.vim` to `~/.vim/colors/`.

Then set the colorscheme in `.vimrc`:

```
" The background option must be set before running this command.
colorscheme ThemerColorTheme
```

## Vim lightline

1. Make sure that the `background` option is set in `.vimrc`.
2. Copy or symlink `Vim lightline/ThemerColorThemeLightline.vim` to `~/.vim/autoload/lightline/colorscheme/`.
3. Set the colorscheme in `.vimrc`: `let g:lightline = { 'colorscheme': 'ThemerColorTheme' }`
4. Restart Vim.

## Visual Studio

1. Select Tools > Import and Export Settings...
2. Choose the "Import selected environment settings" option
3. Choose whether or not to save a backup of current settings
4. Click "Browse..." and choose the generated theme file ('Visual Studio/themer-color-theme-dark.vssettings')
5. Click "Finish"

## VS Code

Copy (or symlink) the generated package directory into the VS Code extensions directory:

```
cp -R 'VS Code/themer-color-theme' ~/.vscode/extensions/
```

Then reload or restart VS Code. The generated theme package should be in the list of installed extensions, and "Themer color-theme Dark" will be available in the list of themes.

## Block Wave wallpaper

Files generated:

* `Block Wave wallpaper/themer-color-theme-dark-2880x1800.svg`

## Burst wallpaper

Files generated:

* `Burst wallpaper/themer-color-theme-dark-2880x1800.svg`

## Circuits wallpaper

Files generated:

* `Circuits wallpaper/themer-color-theme-dark-2880x1800.svg`

## Diamonds wallpaper

Files generated:

* `Diamonds wallpaper/themer-color-theme-dark-2880x1800.svg`

## Dot Grid wallpaper

Files generated:

* `Dot Grid wallpaper/themer-color-theme-dark-2880x1800-1.svg`
* `Dot Grid wallpaper/themer-color-theme-dark-2880x1800-2.svg`

## Octagon wallpaper

Files generated:

* `Octagon wallpaper/themer-color-theme-dark-2880x1800.svg`

## Shirts wallpaper

Files generated:

* `Shirts wallpaper/themer-color-theme-dark-2880x1800.svg`

## Triangles wallpaper

Files generated:

* `Triangles wallpaper/themer-color-theme-dark-2880x1800.svg`

## Warp

1. Copy the generated files (`Warp/themer_color_theme_dark.yaml`) to `~/.warp/themes/`
2. Launch Warp
3. Press `command`-`P` to open the Command Palette
4. Search and select `Open Theme Picker`
5. Search for and select 'Themer color-theme Dark'

## Windows Terminal

1. Open the Windows Terminal settings (`Ctrl`-`,`)
2. Add the contents of 'Windows Terminal/themer-color-theme-dark.json' to the `schemes` array in `profile.json`
3. Set the `colorScheme` property to the desired scheme name ("Themer color-theme Dark") in the profiles section of `profile.json`, e.g.:

```
"profiles": {
  "defaults": {
    "colorScheme": "Themer color-theme Dark"
  }
}
```

## Wox

1. Copy 'Wox/Themer color-theme Dark.xaml' into Wox's theme directory (for example, `C:\Users\<username>\AppData\Local\Wox\app-<version>\Themes`).
2. Open Wox and type "settings" to launch Wox settings.
3. On the "Themes" tab, select the generated theme from the list.

## Xcode

Copy (or symlink) the generated theme file to Xcode's themes directory:

```
mkdir -p ~/Library/Developer/Xcode/UserData/FontAndColorThemes
cp 'Xcode/Themer color-theme Dark.dvtcolortheme' ~/Library/Developer/Xcode/UserData/FontAndColorThemes/
```

Then restart Xcode. The theme will be available in Preferences > Fonts and Colors.

## Xresources

Copy the contents of 'Xresources/themer-color-theme-dark.Xresources' into your .Xresources configuration file, or load it with `xrdb`.