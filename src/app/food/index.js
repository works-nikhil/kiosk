'use strict';

const { getMenuByLocationHandler } = require('./handlers/foodHandler');
const { getMenuByLocationSchema } = require('./schema/foodSchema');
const { placeOrderHandler } = require('./handlers/orderHandler');
const { placeOrderSchema } = require('./schema/orderSchema');
const { getOrdersByLocationHandler } = require('./handlers/statusHandler');
const { getOrdersByLocationSchema } = require('./schema/statusSchema');
const { updateOrderHandler } = require('./handlers/updateOrderHandler');
const { updateOrderSchema } = require('./schema/updateOrderSchema');

const foodRoutes = async fastify => {
  fastify.route({
    method: 'GET',
    url: '/menu/:locationId',
    schema: getMenuByLocationSchema,
    handler: getMenuByLocationHandler
  });

  fastify.route({
    method: 'GET',
    url: '/status/:locationId',
    schema: getOrdersByLocationSchema,
    handler: getOrdersByLocationHandler
  });

  fastify.route({
    method: 'POST',
    url: '/order',
    schema: placeOrderSchema,
    handler: placeOrderHandler
  });

  fastify.route({
    method: 'PUT',
    url: '/orderUpdate',
    schema: updateOrderSchema,
    handler: updateOrderHandler
  });
};

module.exports = foodRoutes;
