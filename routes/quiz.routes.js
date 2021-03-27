module.exports = app => {
    const Quizs = require("../controllers/quiz.controller");
    //const QuizAnswers = require("../controllers/quizAnswer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Quiz
    router.post("/new", Quizs.createQuizQuestions);

    // Submit a Single quiz Result
    router.post("quiz/:id", Quizs.createQuizWithSubmissionAnswers);
  
    // Gets all Quizzes
    router.get("/all", Quizs.findAll);
  
    // Get a Single Quiz by ID
    router.get("/:id", Quizs.findOne);

    // Get a Single Quiz by ID
    router.get("/title", Quizs.findAllQuizesByTitle);
  
    // Update a Quiz with id
    //router.put("/:id", Quizs.update);
  
    // Delete a Quiz with id
    //router.delete("/:id", Quizs.delete);
  
    // Delete All Quizes
    //router.delete("/", Quizs.deleteAll);
  
    app.use('/api/quizzes', router);
  };