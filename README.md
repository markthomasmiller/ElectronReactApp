# ElectronReactApp

A boilerplate template for an Electron + React app. Supports hot reloading, allows locally-scoped CSS Modules ([example](https://github.com/zvphy/ElectronReactApp/tree/master/app/src/components/Link)), and includes many nice-to-haves like an application icon structure, menus, build commands, and so on.

## How to install

```bash
# Clone the repo
git clone https://github.com/zvphy/ElectronReactApp

# Enter the project
cd ElectronReactApp

# Install dependencies
npm install
```

## How to run

```bash
npm start
```

This will open Electron, generate files, and allow hot reloading.

## How to build

Change these commands in _package.json_.

_Build for Mac:_
```bash
npm run build-mac
```

_Build for Windows:_
```bash
# Build for Windows
npm run build-win
```

_Build for Linux:_
```bash
# Build for Linux
npm run build-linux
```

## Only Run Code in Dev/Prod

If you want to enable features only during development, just require _electron-is-dev_ like I do in [main.js](https://github.com/zvphy/ElectronReactApp/blob/master/main.js):

```javascript
// Require electron-is-dev
const isDev = require('electron-is-dev')

// Ask `isDev`
if (isDev) {
  console.log("Development");
} else {
  console.log("Production");
}
```

## Other

Forked from [pastahito's electron-react-webpack](https://github.com/pastahito/electron-react-webpack). My biggest changes involved: 

* the implementation of component styling (my method keeps components coupled with their styles instead of using one large stylesheet)
* adding app icon support out-of-the-box
* simplifying the directory structure
* adding build commands for all platforms
* adding scaffolding for in-app menus (which allows people to use keyboard shortcuts and access common app options by default)
* adding support for window activation on Mac