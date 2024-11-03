const express = require('express');
const router = express.Router();

router.post("/food", (req,res)=>{
    try {
        //console.log(global.food_items,global.fooddata );
        res.send([global.food_items, global.fooddata]);
    } catch (error) {
        console.log(error);
        res.send("server error");
    }
})

module.exports = router;