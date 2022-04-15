const express = require("express");


const router = express.Router();
const Users=require("../Models/users");



router.post("/ajouter_Manager", (req, res) => {
  console.log("heyyyytt req .body", req.body);
  const manager = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,

  });
  manager.save();
  res.status(200).json({
    message: "Manager added succesful",
  });
});

router.put("/Update_Manager", (req, res) => {
  const manager = {
    _id: req.body._id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
  Users.updateOne({ _id: req.body._id }, manager).then(
    res.status(200).json({
      message: "Manager updated successfuly",
    })
  );
});
router.get("/get_Manager_byId/:id", (req, res) => {
  Users.findOne({ _id: req.params.id }).then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        manager: findedObject,
      });
    }
  });
});


router.get("/get_Manager", (req, res) => {
  Users.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        manager: docs,
      });
    }
  });
});



router.delete("/delete_Manager/:id", (req, res) => {
  console.log("herreeeeeee id ", req.params.id);
  Users.deleteOne({ _id: req.params.id }).then(
    res.status(200).json({
      message: "Manager deleted succesful",
    })
  );
});

router.post("/login", (req, res) => {
  console.log("feeeeeeeeeeeee",req.body);
  Users.findOne({ email: req.body.email })
    .then((findedUser) => {
      if (!findedUser) {
        res.status(200).json({
          message: "0",
        });
      }
      return req.body.password=== findedUser.password;
    })
    .then((correctUserPwd) => {
      if (!correctUserPwd) {
        res.status(200).json({
          message: "1",
        });
      }
      Users.findOne({ email: req.body.email }).then((finalUser) => {
        let user = {
          id: finalUser._id,
          name: finalUser.name,
          email: finalUser.email,
          role: finalUser.role,
        };
        res.status(200).json({
          user: user,
          message: "2",
        });
      });
    });
});



module.exports = router;