import express from 'express';
import { v4 as uuidv4 } from 'uuid'
import { validateMsgRegistration, validadeMsgReader, validateUpDateMsg, validateDeleteMsg } from '../middlewares/validation-notes';
const router = express.Router();

export const messages = [];

router.post('/message', validateMsgRegistration, (req, res) => {
    const { email, title, description } = req.body;

    const newMessage = {
        id: uuidv4(),
        email,
        title,
        description,
    };

    messages.push(newMessage);

    return res.status(201).json({ message: `Mensagem criada com sucesso!` });
});

router.get('/message/:email', validadeMsgReader, (req, res) => {
    const userEmail = req.email;
    const userMessages = messages.filter(message => message.email === userEmail);

    if (userMessages.length === 0) {
        return res.status(404).json({ message: 'Nenhuma mensagem encontrada para este email.' });
    }

    return res.status(200).json({ messages: userMessages });
});

router.put('/message/:id', validateUpDateMsg, (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const message = messages.find(msg => msg.id == id);

    message.title = title,
        message.description = description

    res.status(200).json({ message: `Mensagem atualizada com sucesso! ${message.title}` });
});

router.delete('/message/:id', validateDeleteMsg, (req, res) => {
    const { id } = req.params;

    const messageIndex = messages.findIndex(msg => msg.id == id);

    const [deletedMessage] = messages.splice(messageIndex, 1);

    res.status(200).json({ message: 'Mensagem apagada com sucesso', deletedMessage  });
});


export default router;
