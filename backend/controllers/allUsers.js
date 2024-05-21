const userModel = require('../models/userModel')
async function allUsers(req, res){
    try {
        // console.log("UserId is :", req.userId)
        const allUser = await userModel.find()

        res.json({
            message: "all users delails are here",
            data: allUser,
            success: true,
            error: false
        })
    }  catch (err) {
        console.log(err)
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}
module.exports = allUsers