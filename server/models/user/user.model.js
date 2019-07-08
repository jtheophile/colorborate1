const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema)

// create new user into mongodb
UserModel.createUser = user => {
    return UserModel.create(user);
};

// find all users
UserModel.findAllUsers = () => {
    return UserModel.find();
};

// find user by id
UserModel.findUserById = uid => {
    return UserModel.findById(uid);
}

module.exports = UserModel;