const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/quiz.routes")

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// testing a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Scotts Quiz application." });
});

//ADD ROUTES HERE
require("./routes/quiz.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//Database Connection String
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;


const uri = "mongodb+srv://admin:admin@cluster0.27swa.mongodb.net/myQuizDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("myQuizDb").collection("QuizCollection");

  // perform actions on the collection object
  client.close();
});

const db = require("./models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to Database");
    const ExApp = express();
    require("./routes/quiz.routes")(ExApp);

}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});


