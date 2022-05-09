const express = require("express");


const router = express.Router();
const chiffre_daffaire=require("../Models/chiffre_daffaire");

router.get("/chiffre_daffaire",(req,res)=>{
    chiffre_daffaire.find().then((findedObject)=>{
        if (findedObject) {
            res.status(200).json({
                data:findedObject
            })
        }
    })
})





module.exports = router;