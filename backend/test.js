import dotenv from 'dotenv';
dotenv.config({
   path: '../.env'
});
console.log(dotenv.config());
console.log(process.env.PORT);
