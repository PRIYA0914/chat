const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware');

router.post('/profile', auth, userController.createProfile);
router.post('/photo', auth, upload.single('photo'), userController.updatePhoto);
router.post('/online', auth, userController.online);
router.post('/offline', auth, userController.offline);
router.post('/block', auth, userController.blockUser);
router.get('/search', auth, userController.search);

module.exports = router;
