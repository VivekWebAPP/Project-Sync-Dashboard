import express from "express";
import User from "../models/User.js";
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import findToken from "../middleware/findToken.js";

const router = express.Router();

router.post("/createNewUser", [
  body('name').isLength({ min: 5 }).withMessage("Name must be 5 characters long"),
  body('profession').notEmpty().withMessage("Profession is required"),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 5 }).withMessage('Please enter a password of 5 or more characters'),
  body('country').notEmpty().withMessage('Country should not be empty')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).send({error:"User already exists"});
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    user = await User.create({
      name: req.body.name,
      profession: req.body.profession,
      email: req.body.email,
      password: hashPassword,
      country: req.body.country,
    });

    const tokenData = {
      user: {
        userId: user.id,
      }
    };

    const secret = "VivekKLEStudent";
    const jwtToken = jwt.sign(tokenData, secret);

    res.status(200).send({ jwtToken });

  } catch (error) {
    console.error("Errors occurred", error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/verifyUser', [
  body('name').isString().isLength(5).withMessage('Enter a Valid Name'),
  body('email').isEmail().withMessage('Enter a valid email'),
  body('password').isLength({ min: 5 }).withMessage('Please Enter a valid password'),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name, email, password } = req.body;

    let user = await User.findOne({ email:req.body.email });

    if (!user) {
      return res.status(400).send('Invalid Email or Password');
    }

    const isMatched = bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).send('Invalid Email or Password');
    }

    let tokenData = {
      user: {
        userId: user.id,
      }
    };

    const secret = "VivekKLEStudent";

    const jwtToken = jwt.sign(tokenData, secret);

    res.status(200).send({ jwtToken });

  } catch (error) {
    console.error("Errors occurred", error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/personalDetails', findToken, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    if (!user) {
      return res.status(404).send('User Not Found');
    }
    res.send(user);
    
  } catch (error) {
    console.error("Internal Error Occurred", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
