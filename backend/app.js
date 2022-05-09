
const express = require("express") // import express
const bodyParser = require("body-parser"); // import body-parser
const mongoose = require("mongoose"); // import mongoose





mongoose.connect('mongodb://localhost:27017/business_intelligenceDB', { useNewUrlParser: true, useUnifiedTopology: true });



var UserRouter = require("./Routes/users");
var chiffre_daffaireRouter = require("./Routes/chiffre_daffaire");
var charge_variableRouter = require("./Routes/charge_variable");



const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Security configuration
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-with, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PATCH, PUT');
	next();
});

app.use("/api", UserRouter);
app.use("/api", chiffre_daffaireRouter);
app.use("/api", charge_variableRouter);

module.exports = app