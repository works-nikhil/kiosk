'use strict';

const { TABLE_NAMES } = require('../../common/constants.js');
let io;

function setIoInstance(ioInstance) {
  io = ioInstance;
}

const placeOrder = async (knex, locationId, items) => {
  try {
    let orderId;
    await knex.transaction(async trx => {
      const [newOrder] = await trx(TABLE_NAMES.ORDERS)
        .insert({
          location_id: locationId,
          status_id: 1
        })
        .returning('order_id');

      orderId = newOrder.order_id;

      const orderItems = items.map(item => ({
        order_id: orderId,
        item_id: item.item_id,
        quantity: item.quantity
      }));

      await trx(TABLE_NAMES.ORDER_ITEMS).insert(orderItems);
    });

    io.emit('newOrder', {
      message: 'New order placed'
    });

    return orderId;
  } catch (error) {
    throw new Error('Failed to place order: ' + error.message);
  }
};

module.exports = {
  placeOrder,
  setIoInstance
};
