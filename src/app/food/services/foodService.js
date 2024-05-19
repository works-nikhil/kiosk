'use strict';

const { TABLE_NAMES } = require('../../common/constants.js');

const getMenuByLocation = async (knex, locationId) => {
  try {
    const menuItems = await knex(TABLE_NAMES.LOCATIONS + ' as l')
      .select(
        'l.location_id',
        'l.name as location_name',
        'mi.item_id',
        'mi.name as item_name',
        'mi.description',
        'c.name as category',
        'n.description as nature',
        knex.raw('COALESCE(lmi.custom_price, mi.price) as price'),
        'lmi.available'
      )
      .join(TABLE_NAMES.LOCATION_MENU_ITEMS + ' as lmi', 'l.location_id', 'lmi.location_id')
      .join(TABLE_NAMES.MENU_ITEMS + ' as mi', 'lmi.item_id', 'mi.item_id')
      .join(TABLE_NAMES.CATEGORIES + ' as c', 'mi.category_id', 'c.category_id')
      .join(TABLE_NAMES.NATURE + ' as n', 'mi.nature_id', 'n.nature_id')
      .where('l.location_id', locationId);

    return menuItems;
  } catch (error) {
    throw new Error('Failed to retrieve menu items: ' + error.message);
  }
};

module.exports = {
  getMenuByLocation
};
