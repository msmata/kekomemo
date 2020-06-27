const connection = require("../conexion");
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/api/comida', (req, res, next) => {
    console.log('/api/comida');
  const query = `SELECT co.id, co.nombre, min(DATEDIFF(CURDATE(), re.fecha)) as dias FROM comidas co
                 INNER JOIN registros re
                 ON co.id = re.f_idcomida
                 GROUP BY co.id, co.nombre;`;
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