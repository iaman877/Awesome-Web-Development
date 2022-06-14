// write business logic here 
import {Request,Response} from "express";  // 1
import UserModel from "../models/users";
import {createUser,findUser,findAndUpdate, deleteUser} from "../services/user.service";



const homeDetail = async (req:Request,resp:Response)=>{  //2 
   let user = await UserModel.find();
  
//  --- ADD --
//  const user = await createUser({name:'test data',dept:'xyz'})

//  --- Update ----
// const user = await findAndUpdate({name:'Pawan'},{dept:'Hr'},{new:true})

// ---- Find ----
// const user = await findUser({_id:'62a1c4bcc170da89b83b3b6e'})

// ---- Delete----
// const user = await deleteUser({_id:'62a1c4bcc170da89b83b3b6e'})

   let ob = {x : 12,y : 30}
    let data = sumData(ob);
    resp.json({
        message:"Home Page New", 
        data:data,
        myData:user
    })
}

interface params{
    x:number;
    y:number;
}
type sumCheck = (x:params) => number
const sumData:sumCheck = (ob:params)=>{
       return ob.x+ob.y;
}
export {homeDetail}

