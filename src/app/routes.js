'use strict';

const { errorHandler } = require('../errors');
const todoRoutes = require('./todos/routes');
const authRoutes = require('./auth');
const kioskRoutes = require('./kiosk');
const foodRoutes = require('./food');

module.exports = async fastify => {
  fastify.setErrorHandler(errorHandler());
  fastify.register(todoRoutes, { prefix: '/v1/todos' });
  fastify.register(authRoutes, { prefix: '/v1/auth' });
  fastify.register(kioskRoutes, { prefix: '/api/kiosk' });
  fastify.register(foodRoutes, { prefix: '/api/food' });
};
