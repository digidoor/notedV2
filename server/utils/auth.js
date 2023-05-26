const jwt = require('jsonwebtoken');

// this file was taken from an activity - we can keep most of it, move 'secret' to a .env variable

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ userame, email, _id }) {
    const payload = { userame, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
