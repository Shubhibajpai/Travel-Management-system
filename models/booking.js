const mongoose = require ('mongoose')

const bookSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        
      },
      
      phoneNumber: {
        type: String,
        required: true,
      },
      
      destination: {
        type: String,
        required: true,
      },
      travelDate: {
        type: String,
        required: true,
      },
      returnDate: {
        type: String,
        required: true,
      },
      persons: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
      },
      bus: {
        type: String,
        enum: ['economy', 'business', 'first_class'],
        required: true,
      },
      timing: {
        type: String,
      
        required: true,
      },
      payment: {
        type: Number,
        required: true,
      },
})

const bookModel = mongoose.model("Passengers",bookSchema)
module.exports = bookModel