import { Schema, models, model } from "mongoose";

const EnquirySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

const EnquiryModel = models.Enquiry || model("Enquiry", EnquirySchema)

export default EnquiryModel; 