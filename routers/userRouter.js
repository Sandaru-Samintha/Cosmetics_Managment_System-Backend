import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";


const useRouter = express.Router();

useRouter.post("/",createUser)
useRouter.post("/login",loginUser)

export default useRouter;