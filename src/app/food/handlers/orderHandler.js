/* eslint-disable camelcase */
/* eslint-disable no-console */
'use strict';

const { placeOrder } = require('../services/orderService');

async function placeOrderHandler(request, reply) {
  const { location_id, items } = request.body;
  try {
    const orderId = await placeOrder(request.server.knex, location_id, items);

    reply.status(200).send({
      status: 'success',
      message: 'Order placed successfully',
      data: { order_id: orderId }
    });
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
}

module.exports = {
  placeOrderHandler
};
