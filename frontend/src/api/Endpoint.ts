import * as dotenv from "dotenv";
dotenv.config();

const API_ENDPOINT = process.env.API_ENDPOINT;

export default function endpoint() : string {
    return API_ENDPOINT ? API_ENDPOINT : ''; 
};