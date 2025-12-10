const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


router.get('/', homeController.getHomePage);

router.post('/start', homeController.handleStartTimer);

module.exports = router;