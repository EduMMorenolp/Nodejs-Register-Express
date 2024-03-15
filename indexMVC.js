const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de Express y middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const indexRoutes = require('./routes/indexRoutes');
const userRoutes = require('./routes/userRoutes');

// Usar las rutas
app.use('/', indexRoutes); // Usar las rutas de la página de inicio
app.use('/users', userRoutes); // Usar las rutas relacionadas con los usuarios

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(chalk.bgGreen.black.bold(`¡Servidor Iniciado con Éxito! 🚀`));
    console.log(chalk.yellow(`Accede a la aplicación en: `) + chalk.blue.bold(`http://localhost:${PORT}`));
});