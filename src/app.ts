import express from "express";
import "dotenv/config";
import "express-async-errors";
import router from "./routes/routes";
import joiErrorHandler from "./middlewares/joiErrorHandler";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use(router);

app.use(joiErrorHandler);
app.use(errorHandler);

export { app };
