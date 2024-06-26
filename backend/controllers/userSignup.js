const bcrypt = require('bcryptjs')
const userModel = require('../models/userModel')
async function userSignUpController(req, res){
    try {
    const { email, password, name} = req.body
        const user = await userModel.findOne({email})
        if(user){
            throw new Error("User Already Exist!!")
        }
        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)
        if(!hash){
            throw new Error("Something is wrong")
        }
        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hash
        }
        const userData = new userModel(payload)
        const saveUser= await userData.save()
        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created Successfully!"
        })
    } catch (err) {
        console.log(err)
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}
module.exports = userSignUpController
