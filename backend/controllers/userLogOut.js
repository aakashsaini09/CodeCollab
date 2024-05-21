// const bcrypt = require('bcryptjs')
// const userModel = require('../models/userModel')
// const jwt = require('jsonwebtoken')
// const env = require('dotenv')
async function userLogOut(req, res){
    try {
         res.clearCookie("token")
         res.json({
            message: "Logged out successfully",
            error: false,
            success: true,
            data: []
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
module.exports = userLogOut