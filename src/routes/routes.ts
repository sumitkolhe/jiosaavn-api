import { hello } from "@controller/controller";
import express, { Router } from "express";

export const routes: Router = express.Router();

routes.get("/", hello);

