import express from "express";
import addas from "../models/Adds.mjs";

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const addItemInDb = await addas(req.body);
    addItemInDb.save();
console.log(req.body);
    res.send({ massage: "Product Added Succesfully" });
  } catch (error) {
    res.send({ massage : e.massage});
  }
});

export default router;
