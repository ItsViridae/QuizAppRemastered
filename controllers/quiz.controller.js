const db = require("../models");
const Quiz = db.quiz;

// Create  POST - /api/new/
exports.createQuizQuestions = (req, res) => {

    // Create Quiz
    const quizRequest = new Quiz({
        title: req.body.title,
          description: req.body.description,
          TrueFalse_Question1: req.body.TrueFalse_Question1,
          TrueFalse_Question2: req.body.TrueFalse_Question2,
          TrueFalse_Question3: req.body.TrueFalse_Question3,
          MultipleChoice_Question1: req.body.MultipleChoice_Question1,
          MultipleChoice_Multi_Question1: [req.body.MultipleChoice_Multi_Question1],
          ShortAnswer: req.body.ShortAnswer
    });

    //Save Quiz
    quizRequest.save()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while creating the Quiz"
        });
    });
  
};

// Endpoint to submit a single quiz result Must give ID
// POST - /api/quiz/id
exports.createQuizWithSubmissionAnswers = (req, res) => {
    const id = req.params.id;

    // Quiz Id, and Answers from student
    const quizRequest = new Quiz({
        id: id,
        title: req.body.title,
        description: req.body.description,
        TrueFalse_Question1: req.body.TrueFalse_Question1,
        TrueFalse_Question2: req.body.TrueFalse_Question2,
        TrueFalse_Question3: req.body.TrueFalse_Question3,
        MultipleChoice_Question1: req.body.MultipleChoice_Question1,
        MultipleChoice_Multi_Question1: [req.body.MultipleChoice_Multi_Question1],
        ShortAnswer: req.body.ShortAnswer
    });

    //Save Quiz
    quizRequest.save()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while creating the Quiz"
        });
    });
}

// GET - /api/quizzes/
exports.findAll = (req, res) => {
  //accepts empty string and will get any title that is a string... ):
    const title = req.query.title;
    var condition = title;

    Quiz.find(condition)
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving quizes."
        });
      });
};

// GET - /api/quiz/id
exports.findOne = (req, res) => {
   const id = req.params.id;

  Quiz.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not Quiz found with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Quiz with id=" + id });
    });
};

// Find all Quizs with a specific title
exports.findAllQuizesByTitle = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Quiz.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving quizes."
        });
      });
};

// Update a Quiz by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Quiz with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Quiz from the database.
exports.deleteAll = (req, res) => {
  
};

