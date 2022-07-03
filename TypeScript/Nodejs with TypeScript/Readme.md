## Know More about this repo 
- npm i express @types/express nodemon ts-node @types/node typescript
index.ts
```sh
import express,{Request,Response} from "express";
const app = express();
const PORT = 4011
app.get('/test',(req:Request,resp:Response):void =>{
    resp.json({data:"test page"})
})
app.listen(PORT,(): void => {
    console.log(`server is runnning on ${PORT}`)
})
```
routes.ts
```sh
import express,{Request,Response, Router} from "express";
const router = express.Router();

router.get('/home',homeDetail)

router.get('/about',(req:Request,resp:Response)=>{
    resp.json({
        message:"about page"})
})

export {router} 
```
index.ts
```sh
import express,{Request,Response} from "express";
import { router } from "./routes/routes"   
const app = express();
const PORT = 4011
app.use('/',router); 
app.get('/test',(req:Request,resp:Response):void =>{
    resp.json({data:"test page"})
})
app.listen(PORT,(): void => {
    console.log(`server is runnning on ${PORT}`)
```
routes.ts
```sh
cd dillinger
npm i
node app
```
