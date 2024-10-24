import express from 'express';
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import { loginValidation, newUserValidation } from '../middlewares/validation-user'
const router = express.Router();


export const users = [];

router.post('/signup', newUserValidation, async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPass = await bcrypt.hash(password, 10)

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPass
  };

  users.push(newUser);

  return res.status(201).json({ message: `Seja bem vindo ${name}! Usuário registrado com sucesso!` });
});

router.post('/login', loginValidation, (req, res) => {
    const { user } = req

  return res.status(200).json({ 
    message: `Seja bem-vindo ${user.name}! Pessoa usuária logada com sucesso!`,
    userId: user.email
  });

   
});


export default router
