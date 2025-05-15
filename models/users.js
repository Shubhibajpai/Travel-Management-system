const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
        email:String,
        password:String,
        confrimpassword:String,
        phoneNumber:String,
        dob:String,
        resetToken: String,
        resetTokenExpiration: Date
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel