const mongoose = require("mongoose");

const charge_variableSchema = mongoose.Schema({
    Date: { type: Date },
    nom_variable: { type: String },
    Cout: { type: Number },
});

const charge_variable = mongoose.model("charge_variable", charge_variableSchema);
module.exports = charge_variable;
