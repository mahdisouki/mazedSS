const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Assuming these roles, adjust as needed
const roleUserEnum = ['Acheteur', 'Vendeur', 'Admin'];

const utilisateurSchema = new Schema({
  nomFamille: { type: String, required: true },
  Prenom: { type: String},
  numTel: String,
  pseudo:{type:String},
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  motdePasse: { type: String},
  role: {
    type: String,
    enum: roleUserEnum,
    required: true
  },
  photoDeProfil:{type:String},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

}, { discriminatorKey: 'type', timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });
module.exports = mongoose.model("User" , utilisateurSchema , "user" );