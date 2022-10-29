const Joi = require("@hapi/joi")

//Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  })
  return schema.validate(data)
}
//Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  })
  return schema.validate(data)
}
//Car Validation
const carValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().max(24).required(),
    brand: Joi.string().max(24).required(),
    model: Joi.string().min(24).required(),
    price: Joi.number().min(24).required(),
  })
  return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.carValidation = carValidation
