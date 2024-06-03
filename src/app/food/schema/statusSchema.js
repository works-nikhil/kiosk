'use strict';

const getOrdersByLocationSchema = {
  params: {
    type: 'object',
    properties: {
      locationId: { type: 'integer', minimum: 1 }
    },
    required: ['locationId']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        message: { type: 'string' },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              order_id: { type: 'integer' },
              status: { type: 'string' },
              created_at: { type: 'string' },
              updated_at: { type: 'string' },
              items: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    item_name: { type: 'string' },
                    quantity: { type: 'integer' }
                  }
                }
              }
            }
          }
        }
      },
      required: ['status', 'message', 'data']
    }
  }
};

module.exports = {
  getOrdersByLocationSchema
};
