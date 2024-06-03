'use strict';

const { TABLE_NAMES } = require('../../common/constants.js');

const updateOrderStatus = async (knex, orderId, statusId) => {
  try {
    const [updatedOrder] = await knex(TABLE_NAMES.ORDERS)
      .where('order_id', orderId)
      .update({
        status_id: statusId,
        updated_at: knex.fn.now()
      })
      .returning(['order_id', 'status_id']);

    if (!updatedOrder) {
      throw new Error(`Order with order_id ${orderId} not found.`);
    }

    return updatedOrder;
  } catch (error) {
    throw new Error('Failed to update order status: ' + error.message);
  }
};

module.exports = {
  updateOrderStatus
};
