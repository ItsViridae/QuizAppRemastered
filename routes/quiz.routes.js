module.exports = app => {
    const Quizs = require("../controllers/quiz.controller");
    //const QuizAnswers = require("../controllers/quizAnswer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Quiz
    // test -> http://localhost:3000/new/
    router.post("/new/", Quizs.createQuizQuestions);

    // Submit a Single quiz Result
    // test -> http://localhost:3000/quiz/3  -- Generates a new ID for New Quiz in Mongo.
    router.post("/quiz/:id", Quizs.createQuizWithSubmissionAnswers);
  
    // Gets all Quizzes
    // test -> http://localhost:3000/quizzes/
    router.get("/quizzes/", Quizs.findAll);
  
    // Get a Single Quiz by ID
    // test -> http://localhost:3000/quiz/605f8001a1cbb24f10777014
    router.get("/quiz/:id", Quizs.findOne);

    // Get a Single Quiz by Title
    // test -> http://localhost:3000/title/?title=Testing27date
    router.get("/title/", Quizs.findAllQuizesByTitle);
  
    // Update a Quiz with id
    //router.put("/:id", Quizs.update);
  
    // Delete a Quiz with id
    //router.delete("/:id", Quizs.delete);
  
    // Delete All Quizes
    //router.delete("/", Quizs.deleteAll);
  
    app.use('/', router);
  };