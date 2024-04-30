# Express App with TypeScript

## Description

This repository contains an Express.js application written in TypeScript. Express.js is a minimalist web framework for Node.js, and TypeScript adds static typing to JavaScript, providing enhanced development experience and code quality.

## Scripts

- `build`: Compile TypeScript files into JavaScript using `tsc`.
- `start`: Start the server using `nodemon` to automatically restart on file changes.
- `dev`: Build the project and start the server for development.

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Use the available scripts to build and run the project.

## Scripts Explanation

- `build`: Compiles TypeScript files from `src/` directory to JavaScript files in `dist/` directory.
- `start`: Starts the server by running the compiled `index.js` file located in `dist/`.
- `dev`: Runs the build script and starts the server for development with automatic restarts using `nodemon`.

## Project Structure

- `src/`: Contains TypeScript source files.
- `dist/`: Contains compiled JavaScript files.
- `index.ts`: Entry point of the application.

## Dependencies

The project relies on the following dependencies:

- [Express.js](https://expressjs.com/): Web framework for Node.js.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
- [Nodemon](https://nodemon.io/): Utility that monitors for changes in the source code and automatically restarts the server.
