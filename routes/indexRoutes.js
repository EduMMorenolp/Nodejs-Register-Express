const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Renderizar la página de inicio
});


module.exports = router;