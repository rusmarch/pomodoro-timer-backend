const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   title: {
      type: String,
      required: true
   },
   complete: {
      type: Boolean,
      default: false
   },
   estimatedTime: {
      type: Number,
      default: 0
   },
   workedTime: {
      type: Number,
      default: 0
   },
   tags: {
      type: [String],
      default: [],
   },
})

module.exports = model('Task', TaskSchema);

