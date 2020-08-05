const express = require('express');

function routes(CSSE) {
  const CSSERouter = express.Router();
  CSSERouter.route('/CSSEs')
    .get((req, res) => {
      const query = {};
      CSSE.find(query, (err, CSSEs) => {
        if (err) {
          return res.send(err);
        }
        return res.json(CSSEs);
      });
    });

      return CSSERouter;
      }

      module.exports = routes;