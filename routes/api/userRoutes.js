const router = require('express').Router();
const {
    getAllUsers,
    getUserByID,
    postNewUser,
    updateUserById,
    deleteUserById,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController')

router.route('/').get(getAllUsers).post(postNewUser);
router.route('/:userId').get(getUserByID).put(updateUserById).delete(deleteUserById);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);