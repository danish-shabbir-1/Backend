import express from 'express'
import Adds from '../models/Adds.mjs'
const router = express.Router()

// Get data in db

router.get('/' , async (req , res) => {
    const getDataFromDb = await Adds.find()
    res.send({massage : 'Data fetched successfully' , data : getDataFromDb});
})

router.get('/:search' , async (req , res) => {

  console.log(req.params);
    const getDataFromDb = await Adds.find({Title : req.params.search})

    res.send({massage : 'Data fetched successfully', getDataFromDb }) 
})

router.delete('/:id' , async (req , res) => {
    const getDataFromDb = await Adds.findByIdAndDelete(req.params.id)
    res.send({massage : 'Data Deleted successfully'});
})

router.put  ('/:id' , async (req , res) => {
    const getDataFromDb = await Adds.findByIdAndUpdate(req.params.id, req.body)
    res.send({massage : 'Data Updated successfully'});
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