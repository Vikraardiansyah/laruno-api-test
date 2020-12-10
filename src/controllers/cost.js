const axios = require('axios');
const qs = require('querystring');

module.exports = {
  postCost: async (req, res) => {
    try {
      const { data } = await axios.post(
        'https://api.rajaongkir.com/starter/cost',
        qs.stringify(req.body),
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
