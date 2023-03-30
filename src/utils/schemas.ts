import Joi from 'joi';

export const joiPays = Joi.object({
    id: Joi.string().allow(''),
    sum: Joi.number(),
});

export const joiPositions = Joi.object({
    name: Joi.string(),
    quantity: Joi.number(),
    price: Joi.number().allow(''),
    sum: Joi.number().allow(''),
    chequeId: Joi.string().allow(''),
});

export const createChequeSchema = Joi.object({
    // pays: joiPays,
    // positions: joiPositions,
    sum: Joi.number().allow(''),
    info: Joi.string().allow(''),
    chequeType: Joi.number(),
    dateReg: Joi.date().allow(''),
    kioskName: Joi.string(),
});
