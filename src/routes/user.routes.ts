import { Router } from "express";
import {
  createAddress,
  deleteAddress,
  getAddresses,
} from "../controllers/user.controller";
import { getOrders } from "../controllers/order.controller";

const userRouter = Router();

userRouter.get("/addresses", getAddresses);
userRouter.post("/addresses", createAddress);
userRouter.delete("/addresses/:id", deleteAddress);
userRouter.get("/orders", getOrders);

export default userRouter;
