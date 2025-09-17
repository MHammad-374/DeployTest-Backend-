const Users = require("../models/users")




const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }

}

const delUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await Users.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully", user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// const createUser = async (req, res) => {
//     try {
//         // const { name } = req.body;
//         // if (!name) {
//         //     return res.status(400).json({ message: "Name is required" });
//         // }
//         const newUser = new Users({ name: "name" })
//         await newUser.save()
//             .then(() => {
//                 res.status(201).json({
//                     message: "User created successfully",
//                     user: newUser,
//                 });
//             })
//             .catch((err) => {
//                     return res.status(400).json({
//                         msg: "Internal Server Error",
//                         error: err.message
//                     });
//                 })
//     } catch (error) {
//         res.status(500).json({ message: "Internal Server Error" })
//     }
// }

const createUser = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const newUser = new Users({ name });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


module.exports = {
    getUsers,
    delUsers,
    createUser
}