import Joi from "joi";

const creatUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.min": "Minimal 3 ta harfdan kam bulmasligi shart",
    "string.max": "Maximal 30 ta harfdan kup bulmasligi shart",
    "string.empty": "Maydon bo'sh bulmasligi shart",
    "any.required": "Ism kiritish shart",
  }),
  email: Joi.string().min(3).email().required().messages({
    "string.min": "Malumot 3 ta harfdan kam bulmasligi shart",
    "any.required": "Email yozishingiz shart",
    "string.empty": "Maydon bo'sh bo'lmasligi kerak",
    "string.email": "Togri email formatida yozing",
  }),
});

const updateUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.min": "Minimal 3 ta harfdan kam bulmasligi shart",
    "string.max": "Maximal 30 ta harfdan kup bulmasligi shart",
    "string.empty": "Maydon bo'sh bulmasligi shart",
    "any.required": "Ism kiritish shart",
  }),
});
export { creatUserSchema, updateUserSchema };
