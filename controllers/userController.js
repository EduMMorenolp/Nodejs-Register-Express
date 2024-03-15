const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.render('users', { users });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send('Error interno del servidor');
    }
};

exports.getCreateUserForm = (req, res) => {
    res.render('createUser');
};

exports.createUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
            },
        });
        console.log(`Usuario creado: ${newUser.username}`);
        res.redirect('/users');
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
};