import express from "express";
const router = express.Router()

router.post('/register', (req, res) => {
    console.log(req.body);
    res.send({massage : 'User Register Succesfull'})
})


export default router