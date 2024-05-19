'use strict';

const { getAllKiosksHandler } = require('./handlers/kioskHandler');
const { kioskListResponseSchema } = require('./schema/kioskSchema');

const kioskRoutes = async fastify => {
  fastify.route({
    method: 'GET',
    url: '/fetchAllKiosks',
    schema: kioskListResponseSchema,
    handler: getAllKiosksHandler
  });
};

module.exports = kioskRoutes;
