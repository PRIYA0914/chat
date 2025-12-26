const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/create', auth, chatController.createChat);
router.post('/group', auth, chatController.createGroup);
router.post('/add-member', auth, chatController.addMember);
router.post('/remove-member', auth, chatController.removeMember);
router.post('/pin', auth, chatController.pinChat);
router.post('/mute', auth, chatController.muteChat);
router.post('/archive', auth, chatController.archiveChat);
router.post('/delete', auth, chatController.deleteChat);
router.post('/clear-history', auth, chatController.clearHistory);

module.exports = router;
