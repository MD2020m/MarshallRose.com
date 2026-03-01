# MarshallRose.com

## Overview
MarshallRose.com is a frontend system providing an online storefront where users can shop for clothes from Marshall Rose, a new indie fashion house. MarshallRose.com offers users easy access to new, unique, customizable designs.

## Tech Stack
- Vite + React

## Setup
To setup your own instance of MarshallRose.com, fork this repository and clone your fork to your machine. 

Once you've cloned your fork, navigate to the project folder and run `npm install` to install project dependencies.

In addition, you should fork and clone the MarshallRose-API repository which provides backend and database layer systems for MarshallRose.com.

Follow setup instructions found in the README.md file in the MarshallRose-API repository to setup the API.

Create a .env file and add an environment variable providing the base URL for the API development server as follows:
- VITE_DEV_API_URL=*your localhost URL here*.

Finally, start your API development server as described in documentation for MarshallRose-API, and start your frontend development server by running the command `npm run dev`.

## Testing
No further setup should be required for testing. To test the application, simply run npm test. At this point, all tests should pass.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
