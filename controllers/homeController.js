const homeController = {
    getHomePage: (req, res) => {
        res.sendFile('index.html', { root: './public' });
    },
    
    handleStartTimer: (req, res) => {
        const seconds = req.body.seconds;
        
        if (!seconds  || seconds <= 0) {
            return res.status(400).send('Пожалуйста, введите корректное количество секунд');
        }
        
        res.redirect(`/timer?seconds=${seconds}`);
    }
};

module.exports = homeController;