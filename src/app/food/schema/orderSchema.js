'use strict';

const placeOrderSchema = {
  body: {
    type: 'object',
    properties: {
      location_id: { type: 'integer', minimum: 1 },
      items: {
        type: 'array',
        items: {
          type: 'object'
        }
      }
    },
    required: ['location_id', 'items']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        message: { type: 'string' },
        data: {
          type: 'object',
          properties: {
            order_id: { type: 'integer' }
          }
        }
      },
      required: ['status', 'message', 'data']
    }
  }
};

module.exports = {
  placeOrderSchema
};
