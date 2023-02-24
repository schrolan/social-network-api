const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
      thoughtName: {
        type: String,
        required: true,
      },
      inPerson: {
        type: Boolean,
        default: true,
      },
      startDate: {
        type: Date,
        default: Date.now(),
      },
      endDate: {
        type: Date,
        // Sets a default value of 12 weeks from now
        default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
      },
      id: false,
    }
  );
  
  const thought = model('thought', thoughtSchema);
  
  module.exports = thought;
  