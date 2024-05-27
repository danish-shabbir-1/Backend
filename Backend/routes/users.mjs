import express from "express";
import Users from "../model/Users.mjs";
import verifyToken from "../middleware/verifyToken.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.send({ data: users });
  } catch (error) {
    console.error(error);
  }
});

router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const data = await Users.create(req.body);
    res.send({ massage: "user create succesfully" });
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

router.put("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(req.body)

    // Step 1: Check if email exists
    
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "Email not found!" });
    }

    // Step 2: Check password

    const isCorrectPassword = user.comparePassword(password);

    if (!isCorrectPassword) {
      res.status(404).send({ message: "Password is incorrect!" });
      return;
    }

    // Step 3: Genrate a token 

    const token = user.generateToken();

    user.tokens.push(token);
    await user.save();
    
    // Send a success response
    res.status(200).send({ message: "Authentication successful!", token });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


router.put('/logout', verifyToken, async (req, res) => {
  await Users.findByIdAndUpdate(req.userId, { $pull: { tokens: req.tokenToRemove } })
  console.log(req.userId);
  res.send({ message: 'Logged out successfully!' })
})


export default router;
