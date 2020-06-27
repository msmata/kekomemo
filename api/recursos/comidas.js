const connection = require("../conexion");
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/api/comida', (req, res, next) => {
    console.log('/api/comida');
  const query = "SELECT id, nombre FROM comidas;";
  connection.query(query, null, (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).send('Error en base de datos');
      } else {
          console.log(result);
          return res.json(result);
      };
  });
});