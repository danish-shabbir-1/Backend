import express from "express";
import User from '../models/User.mjs'
const router = express.Router()


router.get('/', (req, res) => {
    console.log(req.body);
    res.send({massage : 'check Succesfull'})
})

router.post('/register', async (req, res) => {
    try {
        let userInfo = new User(req.body)
        console.log(userInfo);
        await userInfo.save();
        res.send({massage : 'User Register Succesfull'})
    } catch (e) {
        console.log(e.massage);
    }

})

export default router