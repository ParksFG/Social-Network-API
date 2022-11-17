const { User, Thought } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((error) => res.status(500).json(error));
    },
    getUserByID(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID '})
                    : res.json(user)
            )
            .catch((error) => res.status(500).json(error));
    },
    postNewUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((error) => res.status(500).json(error));
    },
    updateUserById(req, res) {
        User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) => 
                !user
                    ? res.status(404).json({ message: 'No user found with that ID '})
                    : res.json(user)
            )
            .catch((error) => res.status(500).json(error));
    },
    deleteUserById(req, res) {
        User.findByIdAndDelete(
            req.params.id
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID '})
                    : res.json({ Alert: 'User deleted' })
            )
            .catch((error) => res.status(500).json(error));
    },
    // POST to add friend to friend's list
    // DELETE to remove friend from friend's list
}