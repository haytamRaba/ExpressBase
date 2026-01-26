import dotenv from 'dotenv';
import connectDatabase from './config/database.js';
import app from './app.js';

dotenv.config({});
console.log("MONGO_URI:", process.env.MONGODB_URI);
console.log("PORT:", process.env.PORT);
const startServer = async () => {
    try {
        await connectDatabase();


        app.on("error",(error) =>{
            console.error('Error starting server:', error);
            throw error;
        });

        app.listen(process.env.PORT || 4001, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        });

    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}
startServer();
