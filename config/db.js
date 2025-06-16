import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        console.log(process.env.MONGO_URI)
     const connection = await mongoose.connect(process.env.MONGO_URI);
    }catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
    }
}