# Setting up Environment of typescript with node pakage manager

Steps 1st 
-  sudo npm i -g typescript
-  sudo mpm i -g ts-node
-  tsc --init 
-  npm init -y

Step 2nd 

- change script "start": "tsc --watch" in package.json
- configure root dir as "rootDir": "./src", in tsconfig.json
- configure output dir as "outDir": "./dist", in tsconfig.json
- for running program use "node dist index.js" command


