const mongoose= require("mongoose");

const RegisterSchema = mongoose.Schema({
    carnet: String,
    schedule: String,
    isLate: Boolean,
    dateTime: Date
});

module.exports= mongoose.model("Register", RegisterSchema);