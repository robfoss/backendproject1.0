const express = require('express');
const router = express.Router();

const agentController = require('../controllers/agent');


router.get('/login', agentController.agentlogin);

router.get('/signup', agentController.signup)
router.post('/signup', agentController.processAgentSignup)











module.exports = router;