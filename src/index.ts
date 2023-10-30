import express, { Express, Request, Response, Application } from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import router from "./routes/api/api.route";
import { localRouter } from "./routes/local/routes.route";

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use("/api", router);
app.use("/", localRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
