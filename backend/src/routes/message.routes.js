const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/send', auth, messageController.sendMessage);
router.get('/', auth, messageController.getMessages);
router.post('/edit', auth, messageController.editMessage);
router.post('/delete', auth, messageController.deleteMessage);
router.post('/react', auth, messageController.reactMessage);
router.post('/seen', auth, messageController.seenMessage);

module.exports = router;
