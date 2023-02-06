const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const uri="mongodb+srv://user1:kmit1@cluster0.jnygmg8.mongodb.net/AlumniNetwork?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(() => {console.log("Connected");})
    .catch((err) => {console.log("Not connected");});

const Schema = mongoose.Schema;

// Define the schema for your data
const itemSchema = new Schema({
  username: String,
  email: String,
  password: String,
},{collection:"Users"});

// Create a model from the schema
const Item = mongoose.model("AlumniNetwork", itemSchema);

// Fetch data from the database
Item.find({}, (err, items) => {
  if (err) {
    console.log(err);
   
  } else {
    console.log(items);
}
});