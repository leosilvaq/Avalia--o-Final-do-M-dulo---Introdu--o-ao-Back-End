import express from 'express';
import usersRouter from './routes/users';
import notesRouter from './routes/notes';
import cors from 'cors'; 

const app = express();

app.use(cors())
app.use(express.json());
app.use('/users', usersRouter);
app.use('/notes', notesRouter);


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem vindo à aplicação' });
});

const port = 3333;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
