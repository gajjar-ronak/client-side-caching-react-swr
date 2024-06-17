# Client Side Caching Example using React and SWR
<img width="1440" alt="Screenshot 2024-06-16 at 01 09 28" src="https://github.com/gajjar-ronak/client-side-caching-react-swr/assets/53045992/c5011b97-b831-404f-8067-aab423e09f6d">
<img width="1440" alt="Screenshot 2024-06-16 at 01 31 28" src="https://github.com/gajjar-ronak/client-side-caching-react-swr/assets/53045992/6ee76285-55a5-4c18-a6e8-e8f1b6e31bd1">

This project demonstrates client-side caching using React and SWR (Stale-While-Revalidate). The example shows how to fetch data from an API, cache it on the client side, and revalidate it periodically to ensure the data remains fresh.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Available Scripts](#available-scripts)

## Installation

To get started with this project, follow these steps:

   ```bash
   git clone git@github.com:gajjar-ronak/client-side-caching-react-swr.git
```

```cd client-side-caching-react-swr```
Install the dependencies: ```npm install```

## Usage
After installing the dependencies, you can start the development server:
```npm start```

This will run the app in the development mode. Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Dependencies
The project relies on the following main dependencies:

react: A JavaScript library for building user interfaces.

react-dom: Provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.

react-router-dom: Declarative routing for React apps.

swr: React Hooks library for remote data fetching.

axios: Promise-based HTTP client for the browser and Node.js.

antd: A design system with values of Nature and Determinacy for better user experience of enterprise applications.

For the full list of dependencies, refer to the package.json file.

## Available Scripts
In the project directory, you can run:

`npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits. You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

`npm run eject`
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
