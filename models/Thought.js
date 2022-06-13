const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const thoughtSchema = new Schema({
    thoughtText:{
        type:String,
        required:true,
        minlength:1,
        maxlength:280,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        get:(date)=>{
            return (date)
        },
    },
    username:{
        type:String,
        required:true,
    },
    reactions:[reactionSchema],
},{
    timestamps: true,
       toJSON: { 
           getters: true, 
           virtuals: true 
    },
    id: false,
});
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });



  const Thought = model('Thought', thoughtSchema)
  module.exports = Thought;