/* jshint esversion: 6 */

const express = require('express');
const CSSERouter = express.Router();

function routes(CSSE) {
  CSSERouter.route('/')
  .get(( req, res )=>{
     res.send('Browsed to API Page');
  });

  CSSERouter.route('/CSSEs')
    .get((req, res) => {
      const query = {};
           res.send('Browsed to API/CSSEs Page');
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