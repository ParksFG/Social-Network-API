const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    postNewThought,
    updateThoughtById,
    deleteThoughtById,
    postReactionByThoughtId,
    deleteReactionByThoughtId
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(postNewThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById);
router.route('/:thoughtId/reactions').post(postReactionByThoughtId);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReactionByThoughtId);