'use strict';

const getAllKiosks = async knex => {
  try {
    const kiosks = await knex('kiosks').select('*');
    return kiosks;
  } catch (error) {
    throw new Error('Failed to retrieve kiosks: ' + error.message);
  }
};

module.exports = {
  getAllKiosks
};
