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
        res.send({ massage : e.massage});
    }

})

router.put('/login' , async (req, res) => {
    const {email, pass} = req.body

    // 1. step check if email exist
    const user = await user.findOne({email})

    if (!user) {
        res.status(404).send({massage : 'Email not found!'})
        return
    }
    res.send({massage : 'user login succesfully'})
})


export default router