const express = require("express");
const { status } = require("express/lib/response");
const { model } = require("mongoose");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken");

const JWT_SECRET = "csdcashxsc123124145145bv34t23ghvbkhg25gtv34ygvkg6y35"

//const mongoUrl = "mongodb+srv://jk204164:Jitu123@cluster0.gh4my1k.mongodb.net/?retryWrites=true&w=majority"
const mongoUrl = "mongodb+srv://Jitender:Jitender123@cluster0.xewdvpt.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(() => {
    console.log("connected to database");
}).catch((e) => {
    console.log(e);
})

require("./userDetails");
const User = mongoose.model("UserInfo");
app.post("/register", async(req,res) => {
    const {firstname, lastname, email, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try { 
        const oldUser = await User.findOne({email});

        if(oldUser){
           return res.send({error: "User Already Exixts"});
        }

        await User.create({
            firstname,
            lastname,
            email,
            password: encryptedPassword,
        });
        res.send({status: 'ok'})
    } catch(error) {
        res.send({status: 'error'})
    }

});


app.post("/login-user", async (req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if(!user){
        return res.json({error: "User not found!"});
    }

    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({email: user.email}, JWT_SECRET);

        if(res.status(201)){
            return res.json({status: "ok", data: token});
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({status: "error", error: "Invalid Password!"});
});



app.post("/userData", async(req, res) => {
    const {token} = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;
        User.findOne({email: useremail})
        .then((data) =>{
            res.send({status: "ok", data: data});
        })
        .catch((error) =>{
            res.send({status: "error", data: error});
        });
    } catch (error) {}
})

const coursesData = require('./coursesData');

app.get('/courses', (req, res) => {
    res.json(coursesData);
  });


const designData = require('./designData');

app.get('/design', (req, res) => {
    res.json(designData);
})


const developmentData = require('./developmentData');

app.get('/development', (req, res) => {
    res.json(developmentData);
})


const marketingData = require('./marketingData');

app.get('/marketing', (req, res) => {
    res.json(marketingData);
})


app.listen(5000,()=> {
    console.log("server started");
})