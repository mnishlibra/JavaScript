const express = require('express');
const router = express.Router();
const PremiumController = require('../controller/premium');
const Authentication = require('../middleware/auth')

router.get('/premium/showleaderboard',Authentication.authenticate,PremiumController.getUserLeaderBoard);

module.exports = router;