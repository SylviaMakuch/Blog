import { Express } from "express";
import bodyParser from "body-parser";
import { Mongoose } from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.url({ limit: "30mb", extended: true }));
app.use(cors());
