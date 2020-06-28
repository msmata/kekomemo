const connection = require("../conexion");
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/api/comida', (req, res, next) => {
  const query = `SELECT co.id, co.nombre, min(DATEDIFF(CURDATE(), re.fecha)) as dias FROM comidas co
                INNER JOIN registros re
                on co.id = re.f_idcomida
                GROUP BY co.id, co.nombre
                UNION
                SELECT co.id, co.nombre, -1 as dias
                FROM comidas co
                WHERE co.id NOT IN (SELECT f_idcomida from registros);`;
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

router.post('/api/comida', (req, res, next) => {
    if (!req.body.nombre) {
        return res.status(400).send('Falta el nombre de la comida');
    }

    const nombreComida = req.body.nombre.toLowerCase();
    const query = `SELECT id FROM comidas WHERE nombre = '` + nombreComida + `'`;
    connection.query(query, null, (selecterr, selectresult) => {
        if (selecterr) {
            return res.status(500).send('Error al consultar nombre de comida: ' + selecterr);
        } else {
            if (selectresult.length > 0) {
                return res.status(500).send('La comida ya existe');
            } else {
                const insert = "INSERT INTO comidas (nombre) VALUES ('" + nombreComida + "');"
                connection.query(insert, (inserterr, insertresult) => {
                    if (inserterr) {
                        return res.status(500).send('Error al guardar comida: ' + inserterr);
                    } else {
                        return res.json({ id : insertresult.insertId, nombre: nombreComida });
                    }
                });
            }
        }
    });
});