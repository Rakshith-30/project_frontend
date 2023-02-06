const mongoose=require('mongoose');
const url="mongodb+srv://student:kmit123@cluster0.mwifk43.mongodb.net/himalayas";
mongoose.connect(url,console.log('Database Connected'));
const db= mongoose.connection;


