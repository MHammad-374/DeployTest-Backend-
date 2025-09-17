const Users = require("../models/users")




 const getUsers = async (req, res) => {
    try {
         const users = await Users.find();
         res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }

}

module.exports = {
    getUsers
}