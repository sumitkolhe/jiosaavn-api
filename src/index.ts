import express, { Application } from "express";
import { config } from "@config/config";
import { HandleError } from "@middleware/error-handler";
import { routes } from "@routes/routes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const HOST: any = config.SERVER_HOST;
const PORT = config.SERVER_PORT;

app.use(routes);
app.use(
  (
    err: express.ErrorRequestHandler,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => HandleError(err, req, res, next)
);

app.listen(PORT, HOST);
console.log(`Server listening on http://${HOST}:${PORT}`);
