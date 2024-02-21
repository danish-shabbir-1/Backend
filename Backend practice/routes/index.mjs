import express  from "express";
import product from './product.mjs'

const router = express.Router()

router.use('/product' , product)

export default router
