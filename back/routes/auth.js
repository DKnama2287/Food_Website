const express = require('express');
const router = express.Router();
const user = require("../models/user");
const { body, validationResult } = require('express-validator');
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "myvillageisajabpura";
router.post("/user", 
    [
        body('email').isEmail(),
        body('password','invalid password').isLength({ min: 5 }),
        body('name').isLength({ min: 5 }),
    ]

    ,async (req, res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bycrpt.genSalt(10);
    let secpassword = await bycrpt.hash(req.body.password, salt);

    try {
        await user.create({
            name : req.body.name,
            location : req.body.location,
            email : req.body.email,
            password : secpassword
        })
        res.json({
            success:true
        });
    } catch (error) {
        console.log(error);
        res.json({success : false});
    }
})

router.get("/user", async (req, res)=>{

    try {
        res.send("hello guys");
    } catch (error) {
        console.log(error);
        res.json({success : false});
    }
})

router.post('/login', [
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password cannot be blank").exists(),
], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    try {
        let userdata = await user.findOne({ email });  //{email:email} === {email}
        if (!userdata) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }

        const pwdCompare = await bycrpt.compare(password, userdata.password); // this return true false.
        if (!pwdCompare) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success, authToken })



    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

module.exports = router;