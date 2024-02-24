import express  from "express";
import product from './product.mjs'
import adds from "./adds.mjs";

const router = express.Router()

router.use('/product' , product)
router.use('/ads' , adds)

export default router
