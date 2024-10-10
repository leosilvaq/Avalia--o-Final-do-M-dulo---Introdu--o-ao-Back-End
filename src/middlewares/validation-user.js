import { users } from '../routes/users'

import bcrypt from 'bcrypt'

export const newUserValidation = (req, res, next) => {

    const { name, email, password } = req.body;

    if (!name) return res.status(400).json({ message: 'Por favor, verifique se passou o nome.' });
    if (!email) return res.status(400).json({ message: 'Por favor, verifique se passou o email.' });
    if (!password) return res.status(400).json({ message: 'Por favor, verifique se passou a senha.' });

    const userExists = users.find(user => user.email === email);
    if (userExists) return res.status(400).json({ message: 'Email já cadastrado, insira outro.' });

    next();
}

export const loginValidation = async (req, res, next) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!email) return res.status(400).json({ message: 'Insira um e-mail válido' });
    if (!password) return res.status(400).json({ message: 'Insira uma senha válida' });


    if (!user) return res.status(404).json({ message: 'Email não encontrado no sistema, verifique ou crie uma conta' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'usuario ou senha incorretos.' });
    }

    req.user = user

    next();
}

