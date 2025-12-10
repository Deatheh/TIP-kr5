const timerController = {
    getTimerPage: (req, res) => {
        const seconds = req.query.seconds;
        
        if (!seconds || seconds <= 0) {
            return res.status(400).send('Некорректное время для таймера. <a href="/">Вернуться на главную</a>');
        }
        
        res.sendFile('timer.html', { root: './public' });
    },
};

module.exports = timerController;