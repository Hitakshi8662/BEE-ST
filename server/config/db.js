const mongoose = require('mongoose');
const connectDB = async()=> {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect('mongodb+srv://hitakshi0624be21:hitakshi123@hitakshi0624be21.0o1qptm.mongodb.net/?retryWrites=true&w=majority');
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}



module.exports = connectDB;

