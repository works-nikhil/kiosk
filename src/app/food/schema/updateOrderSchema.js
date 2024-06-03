'use strict';

const updateOrderSchema = {
  body: {
    type: 'object',
    properties: {
      order_id: { type: 'integer' },
      status_id: { type: 'integer' }
    },
    required: ['order_id', 'status_id']
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
            order_id: { type: 'integer' },
            status_id: { type: 'integer' }
          }
        }
      },
      required: ['status', 'message', 'data']
    }
  }
};

module.exports = {
  updateOrderSchema
};
