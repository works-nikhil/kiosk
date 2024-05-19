/* eslint-disable no-console */
'use strict';

const { getMenuByLocation } = require('../services/foodService');

async function getMenuByLocationHandler(request, reply) {
  const { locationId } = request.params;
  try {
    const menuItems = await getMenuByLocation(request.server.knex, locationId);
    const nestedMenu = transformToNestedStructure(menuItems);
    reply.send(nestedMenu);
  } catch (error) {
    reply.status(500).send({ error: error.message });
  }
}

function transformToNestedStructure(flatMenuItems) {
  const result = flatMenuItems.reduce((acc, item) => {
    if (!acc[item.location_name]) {
      // eslint-disable-next-line no-param-reassign
      acc[item.location_name] = {
        location_id: item.location_id,
        location_name: item.location_name,
        natures: {}
      };
    }
    const natureGroup = acc[item.location_name].natures;

    if (!natureGroup[item.nature]) {
      natureGroup[item.nature] = {};
    }

    if (!natureGroup[item.nature][item.category]) {
      natureGroup[item.nature][item.category] = [];
    }

    natureGroup[item.nature][item.category].push({
      item_id: item.item_id,
      item_name: item.item_name,
      description: item.description,
      price: item.price,
      available: item.available
    });

    return acc;
  }, {});

  return Object.values(result).map(location => ({
    location_id: location.location_id,
    location_name: location.location_name,
    natures: Object.keys(location.natures).map(nature => ({
      nature,
      categories: Object.keys(location.natures[nature]).map(category => ({
        category,
        items: location.natures[nature][category]
      }))
    }))
  }));
}

module.exports = {
  getMenuByLocationHandler
};
