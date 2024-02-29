import express from "express";
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.body);
    res.send({massage : 'check Succesfull'})
})

router.post('/register', (req, res) => {
    console.log(req.body);
    res.send({massage : 'User Register Succesfull'})
})

export default router