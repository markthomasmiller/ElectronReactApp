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

If you're on a UNIX-based machine, just navigate into the project and run:

```bash
npm run dev
```

If you're not using a UNIX-based machine, open two prompts and point each of them at the ElectronReactApp directory.

In the first prompt, run:

```bash
# Generates files and allows hot reloading
npm run start
```

In the second prompt, run:

```bash
# Starts the Electron app
npm run open
```

Running two prompts won't be necessary in the near future.

## How to build

Change these commands in _package.json_.

```bash
# Build for Mac
npm run build-mac

# Build for Windows
npm run build-win

# Build for Linux
npm run build-linux
```

## Other

Forked from [pastahito's electron-react-webpack](https://github.com/pastahito/electron-react-webpack). My biggest changes involved: 

* the implementation of component styling (my method keeps components coupled with their styles instead of using one large stylesheet)
* adding app icon support out-of-the-box
* simplifying the directory structure
* adding build commands for all platforms
* adding scaffolding for in-app menus (which allows people to use keyboard shortcuts and access common app options by default)
* adding support for window activation on Mac