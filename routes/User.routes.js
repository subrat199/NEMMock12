const express=require('express')
const userRouter = express.Router()
const {userModel}=require("../model/userModel")
userRouter.post("/posting",async (req,res)=>{
    const {company,
        city,
        location,
        role,
        level,
        position,
        language,
        contract}=req.body
    try {
            const user=new userModel({company,
                city,
                location,
                role,
                level,
                position,
                language,
                contract})
        await user.save()
        res.status(200).send("New user has been posted successfully") 
    } catch (error) {
        console.log(error)
        res.status(404).send("There is something wrong with your posting request")
    }
   
})

module.exports={
    userRouter
}