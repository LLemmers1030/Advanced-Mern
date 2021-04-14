const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }).then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

    //console.log("DB Connected");
}

module.exports = connectDB;