import { Schema,model,models } from "mongoose";

const PostSchema = new Schema({
    title: String,
    description: String,
    image: String,
    created_at: String,
},{toJSON: {virtuals:true}});

PostSchema.virtual('short_description').get(function (){
    return this.description.substr(0,100)+"..."
})

PostSchema.virtual('created_at_format').get(function (){
    return changeDateFormat(this.created_at)
})

function changeDateFormat(data_str){
    const date = new Date(data_str);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const PostModel = models.Post || model('Post', PostSchema)

export default PostModel;