# Phaser 3 - Typescript - Example

* Tested with Nodejs v10.x

## Build and run

1. `npm install`
2. `npm run build:dev`
3. `npm start`
4. Go to `localhost:8080`


## How does it work?

* Webpack is used to build a "bundle" and this project has different
    configurations for development and production environments (check the file
    *webpack.dev.js*).

* *tsconfig.json* is the configuration used by the Typescript compiler.

* *package.json* is a Nodejs configuration, where project dependencies and
    script commands (like those in [Build and run](#build-and-run)) are defined.
    *package-lock.json* is generated automatically and describes the dependency
    tree of all installed packages.

* *index-dev.html* defines a simple web page where the game is going to run in
    development mode.

* *src/* folder contains the actual game code. In addition, a type definition
    file for Phaser, *phaser.d.ts*, was downloaded from
    [phaser3-docs](https://github.com/photonstorm/phaser3-docs)
    (commit [47da5dea](https://github.com/photonstorm/phaser3-docs/commit/47da5dea99737a95932c73873758afd6e9e01b08)).
