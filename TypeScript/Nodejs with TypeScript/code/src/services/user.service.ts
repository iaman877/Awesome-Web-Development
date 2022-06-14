import { Document, FilterQuery, UpdateQuery, QueryOptions, DocumentDefinition } from "mongoose";
import User,{UserDocument} from "../models/users"

export function createUser(input:DocumentDefinition<UserDocument>){
    return User.create(input)
}
export function findUser(query:FilterQuery<UserDocument>,QueryOptions ={learn:true}){
    return User.find(query,{},Option);
}

export function findAndUpdate(
    query:FilterQuery<UserDocument>,
    update:UpdateQuery<UserDocument>,
    options:QueryOptions
){
    return User.findOneAndUpdate(query,update,options)
}

export function deleteUser(query:FilterQuery<UserDocument>){
    return User.deleteOne(query)
}