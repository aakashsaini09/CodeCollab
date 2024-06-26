const userModel = require("../models/userModel")
async function updateUser(req, res) {
    try {
        const sesionUser = req.userId
        const { userId, email, name, role} =req.body
        const payload = {
            ...(email &&  {email: email}),
            ...(name &&  {email: email}),
            ...(role &&  {role: role}),
        }
        const user = await userModel.findById(sesionUser)
        const updateUser = await userModel.findByIdAndUpdate(userId, payload)
        res.json({
            data: updateUser,
            message: "user updated",
            success: true,
            error: false
    })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
module.exports = updateUser
