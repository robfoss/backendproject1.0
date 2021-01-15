const express = require('express');
const router = express.Router();

const agentController = require('../controllers/agent');


router.get('/login', agentController.agentlogin);
router.post('/login', agentController.processLogin);

router.get('/logout', agentController.logout);

router.get('/signup', agentController.signup)
router.post('/signup', agentController.processAgentSignup)

router.get('/agenthome', agentController.agenthome);
router.post('/agenthome', agentController.del);





module.exports = router;