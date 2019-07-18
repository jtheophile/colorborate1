const mongoose = require("mongoose");


// schema is the structure of the user
const UserSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        password2: String,        
        firstName: {type: String, default: ""},
        lastName: {type: String, default: ""},
        email: {type: String, default: ""},
        zipCode: {type: Number, default: ""},
        role: {type: String, default: ""},
        businessName: {type: String, default: ""},
        businessAddress: {type: String, default: ""},
        namePosition: {type: String, default: ""},
        website: {type: String, default: ""},
        facebook: {type: String, default: ""},
        instagram: {type: String, default: ""},
        twitter: {type: String, default: ""},
        categories: {type: Array, default: []},
        dateCreated: {type: Date, default: Date.now},
        role: { type: String, enum: ['admin', 'business', 'partner', 'regular'], default: 'regular'}
    }, {collection: "user"}
);

module.exports = UserSchema