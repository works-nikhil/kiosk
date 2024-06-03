/* eslint-disable camelcase */
/* eslint-disable no-console */
'use strict';

const { getOrdersByLocation } = require('../services/statusService');

async function getOrdersByLocationHandler(request, reply) {
  const { locationId } = request.params;
  try {
    const rawOrders = await getOrdersByLocation(request.server.knex, locationId);

    const ordersMap = rawOrders.reduce((acc, row) => {
      const { order_id, status, created_at, updated_at, item_name, quantity } = row;
      const newAcc = { ...acc };
      if (!newAcc[order_id]) {
        newAcc[order_id] = {
          order_id,
          status,
          created_at,
          updated_at,
          items: []
        };
      }
      newAcc[order_id].items.push({ item_name, quantity });
      return newAcc;
    }, {});

    const orders = Object.values(ordersMap);
    reply.status(200).send({
      status: 'success',
      message: 'Orders fetched successfully',
      data: orders
    });
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
}

module.exports = {
  getOrdersByLocationHandler
};
