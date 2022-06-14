
// import { kStringMaxLength } from "buffer";
import {Schema,model, Document} from "mongoose";
 
export interface UserDocument extends Document {
    name: String;
    dept: String
}
interface User{
    name: String;
    dept: String
}

const userSchema = new Schema<User>({
    name:{
        type: String,
        required:true
    },
    dept:{
        type: String,
        required:true
    }
})

const UserModel = model<User>('User',userSchema);
export default UserModel;
