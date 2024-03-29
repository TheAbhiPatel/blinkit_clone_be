import { RequestHandler } from "express";
import userModel from "../models/user.model";

export const createAddress: RequestHandler = async (req, res, next) => {
  try {
    const id = res.locals.userId;
    const user = await userModel.findByIdAndUpdate(id, {
      $push: { addresses: { ...req.body } },
    });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    res.status(201).json({ success: true, message: "Address created." });
  } catch (error) {
    next(error);
  }
};

export const getAddresses: RequestHandler = async (req, res, next) => {
  try {
    const id = res.locals.userId;
    const foundAddresses = await userModel.findById(id).select("addresses");
    const addresses = foundAddresses?.addresses;
    res
      .status(200)
      .json({ success: true, message: "Addresses fetched.", addresses });
  } catch (error) {
    next(error);
  }
};

export const deleteAddress: RequestHandler = async (req, res, next) => {
  try {
    const userId = res.locals.userId;
    const id = req.params.id;
    const addresses = await userModel.findByIdAndUpdate(
      userId,
      {
        $pull: { addresses: { _id: id } },
      },
      { new: true }
    );
    if (!addresses)
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    res.status(200).json({ success: true, message: "Address deleted." });
  } catch (error) {
    next(error);
  }
};

/** ---> sample request handler */
export const sample: RequestHandler = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
