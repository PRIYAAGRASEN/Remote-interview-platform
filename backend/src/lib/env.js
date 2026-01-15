import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV
};
// so we dont have to import env file in each file