import express from 'express'
import Adds from '../models/Adds.mjs'
const router = express.Router()

// Get data in db

router.get('/' , async (req , res) => {
    const getDataFromDb = await Adds.find()
    res.send({massage : 'Data fetched successfully' , data : getDataFromDb});
})

// Add data in db 

router.post("/post", async (req, res) => {
    try{
      let ad = new Adds(req.body);

    await ad.save();
    
    res.send({ massage: "Product Added Succesfully" });
    }catch(e){
      console.log(e);
    }
});

export default router