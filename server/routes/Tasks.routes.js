import express from "express";
import { createTask, getTask, gettasks } from "../controllers/Tasks.controllers.js";

const taskRoutes = express.Router();

taskRoutes.post("/",createTask);
taskRoutes.get('/alltasks',gettasks);
taskRoutes.get('/:id',getTask);

export default taskRoutes;