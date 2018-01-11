# ElectronReactApp

A boilerplate template for an Electron + React app. Supports hot reloading and CSS Modules that are locally scoped by default ([example](https://github.com/zvphy/ElectronReactApp/tree/master/app/src/components/Link)).

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

Open two prompts and point each of them at the ElectronReactApp directory.

In the first prompt, run:

```bash
# Generates files and allows hot reloading
npm run dev
```

In the second prompt, run:

```bash
# Starts the Electron app
npm start
```

## Other

Forked from [pastahito's electron-react-webpack](https://github.com/pastahito/electron-react-webpack). My biggest changes involved the implementation of component styling (my method keeps components coupled with their styles instead of using one large stylesheet), but I also plan to add additional features to simplify the process of updating menus, changing out the app icon, and so on.