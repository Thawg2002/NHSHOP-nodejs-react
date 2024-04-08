import Joi from "joi";

export const productAuthSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Tên sản phẩm là bắt buộc",
    "string.empty": "Tên sản phẩm không được để trống",
  }),
  price: Joi.number().required().min(0).messages({
    "any.required": "Giá sản phẩm là bắt buộc",
    "number.base": "Giá sản phẩm phải là số",
    "number.min": "Giá sản phẩm không thể nhỏ hơn 0",
  }),
  description: Joi.string().required().messages({
    "any.required": "Mô tả sản phẩm là bắt buộc",
    "string.empty": "Mô tả sản phẩm không được để trống",
  }),
  image: Joi.string().required().messages({
    "any.required": "Ảnh sản phẩm là bắt buộc",
    "string.empty": "Ảnh sản phẩm không được để trống",
  }),

  discount: Joi.number().min(0).optional().messages({
    "number.base": "Giảm giá sản phẩm phải là số",
    "number.min": "Giảm giá sản phẩm không thể nhỏ hơn 0",
  }),
  quantity: Joi.number().required().min(0).messages({
    "any.required": "Số lượng sản phẩm là bắt buộc",
    "number.base": "Số lượng sản phẩm phải là số",
    "number.min": "Số lượng sản phẩm không thể nhỏ hơn 0",
  }),
  featured: Joi.boolean().optional().messages({
    "boolean.base": "Trường featured phải là một giá trị boolean",
  }),
});
