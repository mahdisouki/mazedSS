const mongoose = require('mongoose');
const User = require('../models/User.model')
// Define the Solde schema
const SoldeSchema = new mongoose.Schema({
    soldeMazed: {
        type: Number,
        required: true
    },
    soldeAquisition: {
        type: Number,
        required: true
    },
    user:User.schema
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});


module.exports = mongoose.model("solde", SoldeSchema, 'solde');


