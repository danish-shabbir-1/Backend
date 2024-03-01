import express from "express";
import user from '../models/userInfo.mjs'
const router = express.Router()


router.get('/' , async (req, res) => {
    const getUserData = await user.find()
    res.send({massage : 'product fetched succesfully', data : getUserData})
})


router.post('/register', async (req, res) => {
    try {
        let userInfo = new user(req.body)
        console.log(userInfo);
        await userInfo.save();
        res.send({massage : 'User Register Succesfull'})
    } catch (e) {
        console.log(e.massage);
    }

})


export default router