const { Schema, model } = require('mongoose');
// Require reactionSchema

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
            // Add gather method.
        },
        username: {
            type: String,
            reuire: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;