const express = require('express');
const { verificaToken } = require('../middlewares/autenticacion');

let app = express();
let Producto = require('../models/producto');

// Obtener todos los productos
app.get('/productos', (req, res) => {
    // Trae todos los productos
    // populate: usuario categoria
    // paginado
});

// Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
    // populate: usuario categoria
});

// Crear un nuevo producto
app.post('/producto', verificaToken, (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let body = req.body;

    let producto = new Producto({
        usuario: req.usuario._id,
        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        disponible: body.disponible,
        categoria: body.categoria
    });

    producto.save((err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            producto: productoDB
        });
    });
});

// Actualizar un nuevo producto
app.put('/producto/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;
    console.log(id);
    Producto.findByIdAndUpdate(id, verificaToken, { new: true, runValidators: true }, (err, productoDB) => {
        console.log('PEPEPEPEPEP');
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no es correcto'
                }
            });
        }
        console.log(productoDB);
        productoDB.nombre = body.nombre;
        productoDB.precioUni = body.precioUni;
        productoDB.categoria = body.categoria;
        productoDB.disponible = body.disponible;
        productoDB.descripcion = body.descripcion;

        productoDB.save((err, productoGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                producto: productoGuardado
            });
        });
    });
});

// Borrar un producto
app.delete('/producto/:id', (req, res) => {
    // disponible sera falso
});

module.exports = app;