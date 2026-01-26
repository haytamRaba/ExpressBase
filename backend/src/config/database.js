import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        console.log('Connecting to MongoDB...');
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}` )
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    //     console.log(connectionInstance);// object containing details about the connection
    //    console.log('===================================');
    //    console.log(connectionInstance.connection);
    //    console.log('===================================');
    
    }
    catch(error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }

}
export default connectDatabase;