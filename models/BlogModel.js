import {Schema,model} from 'mongoose'


const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

export const BlogModel = model('Blog',blogSchema)