import express,{Request,Response} from "express";
import { router } from "./routes/routes"   // 1
import connects from "./config/db";
const app = express();
const PORT = 4011

app.use('/',router);  //2

app.get('/test',(req:Request,resp:Response):void =>{
    resp.json({data:"test page"})
})
connects();

app.listen(PORT,(): void => {
    console.log(`server is runnning on ${PORT}`)
})