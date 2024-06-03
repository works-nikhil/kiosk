/* eslint-disable camelcase */
/* eslint-disable no-console */
'use strict';

const { updateOrderStatus } = require('../services/updateOrderService');

async function updateOrderHandler(request, reply) {
  const { order_id, status_id } = request.body;
  try {
    const updatedOrder = await updateOrderStatus(request.server.knex, order_id, status_id);

    reply.status(200).send({
      status: 'success',
      message: 'Order status updated successfully',
      data: updatedOrder
    });
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
}

module.exports = {
  updateOrderHandler
};
