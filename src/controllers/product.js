import { StatusCodes } from "http-status-codes";
import Product from "../models/product";
export const create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
export const getAll = async (req, res) => {
  try {
    const product = await Product.find({});
    if (product.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product not found" });
    }
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product not found" });
    }
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
export const updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
export const related = async (req, res) => {
  try {
    const product = await Product.find(
      { category: req.params.categoryId },
      null,
      { skip: 1 }
    );
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {}
};
