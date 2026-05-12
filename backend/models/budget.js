import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.ObjectId,
            ref:"User"
        },
        categoryId:{
            type:mongoose.Schema.ObjectId,
            ref:"Category"
        },
        amount:{
            type:Number,
            required:true
        },
        period:{
            type:String,
            enum:["weekly","monthly","yearly"],
            required:true,
            default:"monthly"
        },
        startDate:{
            type:Date,
            
        },
        endDate:{
            type:Date,
            
        },
        categoryName:{
            type:String,
            
        }
    },
    {timestamps:true}
)

const Budget =new mongoose.model("Budget",budgetSchema)

export default Budget;