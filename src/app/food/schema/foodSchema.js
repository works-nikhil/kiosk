'use strict';

const getMenuByLocationSchema = {
  params: {
    type: 'object',
    properties: {
      locationId: { type: 'integer', minimum: 1 }
    },
    required: ['locationId']
  },
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          location_id: { type: 'integer' },
          location_name: { type: 'string' },
          natures: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                nature: { type: 'string' },
                categories: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      category: { type: 'string' },
                      items: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            item_id: { type: 'integer' },
                            item_name: { type: 'string' },
                            description: { type: 'string' },
                            price: { type: 'number' },
                            available: { type: 'boolean' }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

module.exports = {
  getMenuByLocationSchema
};
