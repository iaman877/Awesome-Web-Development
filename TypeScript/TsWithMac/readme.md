# Setting up Environment of typescript with node pakage manager

Steps 1st 
-  sudo npm i -g typescript
-  sudo npm i -g ts-node
-  tsc --init 
-  npm init -y

Step 2nd 

- Change script "start": "tsc --watch" in package.json
- Configure root dir as "rootDir": "./src", in tsconfig.json
- Configure output dir as "outDir": "./dist", in tsconfig.json
- For running program use "node dist index.js" command


