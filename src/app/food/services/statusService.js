'use strict';

const { TABLE_NAMES } = require('../../common/constants.js');

const getOrdersByLocation = async (knex, locationId) => {
  try {
    const orders = await knex
      .select(
        'o.order_id',
        'os.status',
        'o.created_at',
        'o.updated_at',
        'mi.name AS item_name',
        'oi.quantity'
      )
      .from(TABLE_NAMES.ORDERS + ' as o')
      .join(TABLE_NAMES.ORDER_STATUS + ' as os', 'o.status_id', 'os.status_id')
      .join(TABLE_NAMES.ORDER_ITEMS + ' as oi', 'o.order_id', 'oi.order_id')
      .join(TABLE_NAMES.MENU_ITEMS + ' as mi', 'oi.item_id', 'mi.item_id')
      .where('o.location_id', locationId);

    return orders;
  } catch (error) {
    throw new Error('Failed to retrieve orders: ' + error.message);
  }
};

module.exports = {
  getOrdersByLocation
};
