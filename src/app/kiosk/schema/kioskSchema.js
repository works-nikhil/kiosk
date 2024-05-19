'use strict';

const kioskListResponseSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          kiosk_id: { type: 'integer' },
          name: { type: 'string' }
          // Add other kiosk properties here
        }
      }
    }
  }
};

module.exports = {
  kioskListResponseSchema
};

// const { PASSWORD, PHONE_NUMBER } = require('../../common/pattern');
// const { errorSchemas } = require('../../common/schema');

// const request = {
//   tags: ['Auth'],
//   summary: 'Register a new  user',
//   description: `<h3> This API let new users to register </h3>`,
//   body: {
//     title: 'Register New User',
//     type: 'object',
//     additionalProperties: false,
//     required: ['firstName', 'lastName', 'email', 'password', 'phoneNumber'],
//     properties: {
//       firstName: { type: 'string', minLength: 1 },
//       lastName: { type: 'string', minLength: 1 },
//       email: {
//         type: 'string',
//         format: 'email',
//         minLength: 6,
//         maxLength: 100,
//         errorMessage: { format: 'should be valid email' }
//       },
//       password: {
//         type: 'string',
//         pattern: PASSWORD,
//         errorMessage: { pattern: 'should be compliant with password policy' }
//       },
//       phoneNumber: {
//         type: 'string',
//         pattern: PHONE_NUMBER,
//         errorMessage: { pattern: 'should be valid phoneNumber' }
//       }
//     }
//   }
// };

// const response = {
//   type: 'object',
//   properties: {
//     userId: {
//       type: 'string',
//       format: 'uuid'
//     }
//   }
// };

// const kiosk = {
//   ...request,
//   response: {
//     200: response,
//     ...errorSchemas
//   }
// };

// module.exports = { kiosk };
