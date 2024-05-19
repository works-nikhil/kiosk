/* eslint-disable no-console */
'use strict';

const { getAllKiosks } = require('../services/kioskService');

async function getAllKiosksHandler(request, reply) {
  try {
    const kiosks = await getAllKiosks(request.server.knex);
    reply.send(kiosks);
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
}

module.exports = {
  getAllKiosksHandler
};
