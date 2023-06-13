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
    let { page } = req.body;
    try {
      let Total_products = await userModel.find({});
      let productCount = Total_products.length;
  
      let productsPage = await userModel.find({})
        .limit(10)
        .skip((page - 1) * 10);
      res.status(200).send({data:{ productsPage, productCount }});
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: "Invalid Request Error Happened" });
    }
})
userRouter.get('/filter', async (req, res) => {
    let {role,page}=req.body
    try {
        let productsPage = await userModel.find({role})
        .limit(10)
        .skip((page - 1) * 10)
        res.status(200).send({data:{ productsPage }})
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "Invalid Request Error Happened" });
    }

})
userRouter.get("/sort", async (req, res) => {
    let { sort, page } = req.body;
    try {
      let productsPage = await userModel.find({})
        .limit(10)
        .skip((page - 1) * 10)
        .sort({ postedAt: sort });
      let productCount = produtsPage.length;
      res.status(200).send( {data:{ productsPage, productCount }} );
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: "Invalid Request Error Happened" });
    }
  });
module.exports={
    userRouter
}