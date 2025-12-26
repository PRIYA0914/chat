const express = require('express');
const router = express.Router();
const callController = require('../controllers/call.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/initiate', auth, callController.initiateCall);
router.post('/accept', auth, callController.acceptCall);
router.post('/reject', auth, callController.rejectCall);
router.post('/log', auth, callController.logCall);

module.exports = router;
