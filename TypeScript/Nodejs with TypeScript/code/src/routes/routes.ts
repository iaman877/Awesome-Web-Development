import express,{Request,Response, Router} from "express";
import { homeDetail } from "../controllers/users";
const router = express.Router();

router.get('/home',homeDetail)

router.get('/about',(req:Request,resp:Response)=>{
    resp.json({
        message:"about page"})
})

export {router} 