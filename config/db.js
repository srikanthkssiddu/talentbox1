const mongoose = require('mongoose');

mongo_uri = "mongodb+srv://srikanth:sri%402022@cluster0.n8gv72l.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try{
        await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connection to DB successfull");
    }
    catch(err){
        console.log(err.message);
        process.exit(1)
    }
};

module.exports = connectDB;