const mongoose = require("mongoose");

const chiffre_daffaireSchema = mongoose.Schema({
    Date: { type: Date },
    nom_de_produit: { type: String },
    chiffre_daffaireSchema: { type: Number },
    prix_de_vente: { type: Number },
});

const chiffre_daffaire = mongoose.model("chiffre_daffaire", chiffre_daffaireSchema);
module.exports = chiffre_daffaire;
