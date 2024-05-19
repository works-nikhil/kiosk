'use strict';

const { getMenuByLocationHandler } = require('./handlers/foodHandler');
const { getMenuByLocationSchema } = require('./schema/foodSchema');

const foodRoutes = async fastify => {
  fastify.route({
    method: 'GET',
    url: '/menu/:locationId',
    schema: getMenuByLocationSchema,
    handler: getMenuByLocationHandler
  });
};

module.exports = foodRoutes;
