var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var shortAnswerValidator = [
    validate({
        validator: 'isLength',
        arguments: [0,255],
        message: 'ShortAnswer should be between 0 and 254 characters'
    })
];



module.exports = mongoose => {
    const Quiz = mongoose.model(
      "quiz",
      mongoose.Schema(
        {
          title: String,
          description: String,
          TrueFalse_Question1: Boolean,
          TrueFalse_Question2: Boolean,
          TrueFalse_Question3: Boolean,
          MultipleChoice_Question1: String,
          MultipleChoice_Multi_Question1: [{"A1": String, "A2": String, "A3": String, "A4": String}],
          ShortAnswer: {type: String, required: true, validate: shortAnswerValidator},
        },
        { timestamps: true }
      )
    );
    return Quiz;
};