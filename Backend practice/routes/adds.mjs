import express from "express";
import adds from "../models/Adds.mjs";

const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const addItemInDb = await adds(req.body);
    await addItemInDb.save()
    res.send({ massage: "Product Added Succesfully" });
  } catch (error) {
    res.send({ massage: e.massage });
  }
});

export default router;
