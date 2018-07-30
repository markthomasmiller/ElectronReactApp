![Electron React App](https://raw.githubusercontent.com/markthomasmiller/ElectronReactApp/master/assets/images/electronreactapp.png)

# ElectronReactApp

A lightweight boilerplate template for an Electron + React app. It supports all the basic functionality you'd expect from a desktop app, but you don't need to write the code to do it. (Just focus on writing your own application.) Out-of-the-box support for:

- hot reloading (see your code changes without having to refresh)
- locally-scoped CSS Modules ([example](https://github.com/zvphy/ElectronReactApp/tree/master/app/src/components/Link))
- application icons (just switch out the images)
- menus (plus, keyboard shortcuts work out-of-the-box)
- extremely simple run and build commands
- the option to run code _only_ in dev or prod

## How to use

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

## Getting started

ElectronReactApp uses a minimalistic folder structure that's easy to understand and extend. As the developer, you'll be spending most of your time inside the _/app/src_ directory, where you'll find the starting point for a simple React application.

Custom icons can be added to the _/assets/icons/_ directory. (ElectronReactApp provides a simple placeholder for you – an unbranded, circular gradient.)

Finally, you can define your default Electron configuration inside _./main.js_. From this file, you can control everything from the default width and height of the window to the background color. Window activation (an Apple-specific feature) is already handled for you.

## How to build

- Build for Mac: `npm run build-mac`
- Build for Windows: `npm run build-win`
- Build for Linux: `npm run build-linux`

## Only run code in dev/prod

Sometimes it's helpful to _only_ run code in dev, or only in production. Just require _electron-is-dev_ and check against `isDev` like I do in [main.js](https://github.com/zvphy/ElectronReactApp/blob/master/main.js):

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

## Changes

Forked from [pastahito's electron-react-webpack](https://github.com/pastahito/electron-react-webpack). My biggest changes involved: 

* the implementation of component styling (my method keeps components coupled with their styles instead of using one large stylesheet)
* adding app icon support out-of-the-box
* simplifying the directory structure
* adding build commands for all platforms
* adding scaffolding for in-app menus (which allows people to use keyboard shortcuts and access common app options by default)
* adding support for window activation on Mac

## Other

MIT © [Mark Miller](https://zeph.co/about)