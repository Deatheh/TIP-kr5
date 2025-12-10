const express = require('express');
const app = express();
const port = 3000;

const logMiddleware = require('./middlewares/logMiddleware');

const indexRouter = require('./routes/index');
const timerRouter = require('./routes/timer');

app.use(logMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/timer', timerRouter);

app.use((req, res) => {
    res.status(404).send('Страница не найдена');
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});