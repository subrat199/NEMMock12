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
        contract,
    postedAt}=req.body
    try {
            const user=new userModel({company,
                city,
                location,
                role,
                level,
                position,
                language,
                contract,postedAt})
        await user.save()
        res.status(200).send("New user has been posted successfully") 
    } catch (error) {
        console.log(error)
        res.status(404).send("There is something wrong with your posting request")
    }
   
})
userRouter.get('/listing', async (req, res) => {
    const formData = new userModel.find()
    try {
        res.status(200).send(formData)
    } catch (error) {
        console.log(error)
        res.status(404).send("There is something wrong")
    }
    
})
module.exports={
    userRouter
}