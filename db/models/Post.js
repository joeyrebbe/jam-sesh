const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    location: {
      type: String
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comments'
      }
    ]
  },
  { timestamps: true }
)
