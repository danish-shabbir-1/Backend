import express  from "express";
import product from './product.mjs'
import adds from './adds.mjs'
import user from './user.mjs' 

const router = express.Router()

router.use('/product' , product)
router.use('/ads' , adds)
router.use('/user' , user)

export default router
