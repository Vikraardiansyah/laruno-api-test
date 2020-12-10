const axios = require('axios');

module.exports = {
  getCity: async (req, res) => {
    try {
      const { data } = await axios.get(
        'https://api.rajaongkir.com/starter/city',
        {
          headers: {
            key: 'a8b3666f74be8aa48207b2acbdd89239',
          },
        }
      );
      return res.json(data);
    } catch (error) {
      return res.json(error);
    }
  },
};
