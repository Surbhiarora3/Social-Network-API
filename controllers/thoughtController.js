const {User,Thought} = require('../models');

module.exports = {
    
    getThoughts(req, res) {
    
      Thought.find()
        .then((thoughts) => {
          return res.json(thoughts)
        })
        
        .catch((err) => res.status(500).json(err));
    },
  
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
  
    createThought(req, res) {
      Thought.create(req.body)
        .then((thought) => 
        !thought
            ? res.status(404).json({ message: 'No user with that ID' })
         :User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { 
            thoughts: thought._id
          } },
          { new: true }
        )
         )
         .then((thought) => 
         !thought 
         ? res.status(404).json({
           message: 'No user with that ID',
         })
         :res.json({
          message: 'thought created',
        })
       
         )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    
    deleteThought(req, res) {
     Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            :User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
        .then((thought) => 
        !thought 
        ? res.status(404).json({
          message: 'thought deleted, but no users found',
        })
        :res.json({ message: 'thought and users deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
   
    addReaction(req, res) {
      console.log('You are adding a reaction');
      console.log(req.body);
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID :(' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
  
    removeReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID :(' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
  };
  