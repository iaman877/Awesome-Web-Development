# Topic Covered
Setup Typescript with Webpack 
- npm init 
- tsc --init ["target": "ES6", "module": "ES2015"]
- npm i webpack-cli typescript ts-loader
- tsconfig.json ["outFile": "./main.js"]
- control + Shift +b  [tsc watch-video3/tsconfig.json]
- create a webpack.config.js file and write some configuaration 
- add [<script src="./bundle.min.js"></script>] in index.html
- package.json ["scripts" section => "build": "webpack"]
 - run using => npm run build