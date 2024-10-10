import { users } from "../routes/users";
import { messages } from "../routes/notes";


export const validateMsgRegistration = (req, res, next) => {
    const { email, title, description } = req.body;

    const user = users.find(user => user.email === email);

    if (!email) return res.status(400).json({ message: 'Por favor, verifique se passou o email.' });
    if (!title) return res.status(400).json({ message: 'Por favor, verifique se passou o título.' });
    if (!description) return res.status(400).json({ message: 'Por favor, verifique se passou a descrição.' });
    if (!user) return res.status(404).json({ message: 'Email não encontrado, verifique ou crie uma conta' });

    next();
}

export const validadeMsgReader = (req, res, next) => {
    const { email } = req.params;

    const user = users.find(user => user.email === email);
    if (!user) return res.status(404).json({ message: 'Email não encontrado, verifique ou crie uma conta' });

    req.email = email;

    next();
};

export const validateUpDateMsg = (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const message = messages.find(msg => msg.id == id);

    if (!message) return res.status(404).json({ message: 'Por favor, informe um id válido da mensagem' });
    if (!title) return res.status(400).json({ message: 'Por favor, informe um Titulo válido da mensagem' });
    if (!description) return res.status(400).json({ message: 'Por favor, informe uma descrição válida da mensagem' });

};

export const validateDeleteMsg = (req, res, next) => {
    const { id } = req.params;

    const messageIndex = messages.findIndex(msg => msg.id == id);
    if (messageIndex === -1) return res.status(404).json({ message: 'Mensagem não encontrada, verifique o identificador em nosso banco' });

    next();
}