const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel =require('./models/users')
const ContactModel =require('./models/contact')
const BookModel =require('./models/booking')
const crypto = require("crypto");

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/TravelManagement");

app.post('/register',(req,res) => {
    console.log("hello")
    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.post('/contact',(req,res) => {
    // console.log("hello")
     ContactModel.create(req.body)
    .then(contactus=> res.json(contactus))
    .catch(err=> res.json(err))
})

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if(user.password===password){
                res.json({
                    message: "Success",
                    user: {
                        email: user.email
                    }
                });
                // res.json("Success")
            } else {
                res.json("The Password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    }) 
})

app.post('/profile', (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    BookModel.find({ email }) // assuming your booking documents have an 'email' field
      .then(bookings => res.json(bookings))
      .catch(err => res.status(500).json({ error: err.message }));
  });


app.post('/booking',(req,res) => {
    console.log("hello")
    BookModel.create(req.body)
    .then(Passengers=> res.json(Passengers))
    .catch(err => {
        console.error("Booking error:", err); // log detailed error
        res.status(500).json({ error: err.message });
      });
})

app.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    UserModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: "No user found with that email" });
            }

           
            const token = crypto.randomBytes(32).toString("hex");
            const expiration = Date.now() + 3600000; 

            
            user.resetToken = token;
            user.resetTokenExpiration = expiration;

            return user.save().then(() => {
                // Simulate sending email
                const resetLink = `http://localhost:5173/reset-password/${token}`;
                console.log(`Reset password link (to be emailed): ${resetLink}`);

                res.json({ 
                    message: "Reset link has been sent to your email", 
                    resetLink: `http://localhost:5173/reset-password/${token}` 
                  });
                  
            });
        })
        .catch(err => {
            console.error("Forgot password error:", err);
            res.status(500).json({ error: "Server error" });
        });
});

app.post('/reset-password/:token', (req, res) => {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    UserModel.findOne({
        resetToken: token,
        resetTokenExpiration: { $gt: Date.now() }
    })
    .then(user => {
        if (!user) {
            return res.status(400).json({ error: "Token is invalid or expired" });
        }

        user.password = password;
        user.confrimpassword = confirmPassword;
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;

        return user.save().then(() => {
            res.json({ message: "Password has been reset successfully" });
        });
    })
    .catch(err => {
        console.error("Reset password error:", err);
        res.status(500).json({ error: "Server error" });
    });
});



app.listen(3001,()=>{
    console.log("Server is running ");
})