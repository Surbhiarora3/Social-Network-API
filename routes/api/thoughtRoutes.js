const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');


router.route('/').get(getThoughts);
router.route('/new/:userId').post(createThought);


router
  .route('/:thoughtId')
  .get(getSingleThought)
  .delete(deleteThought);
  router.route('/:thoughtId/reactions').post(addReaction);
  router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);
module.exports = router;