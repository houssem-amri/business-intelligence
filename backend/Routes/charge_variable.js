const express = require("express");


const router = express.Router();
const charge_variable=require("../Models/charge_variable");



router.get("/charge_variable",(req,res)=>{
    charge_variable.find().then((findedObject)=>{
        if (findedObject) {
            res.status(200).json({
                data:findedObject
            })
        }
    })
})



module.exports = router;