const express = require('express');
const router = express.Router();
const statusController = require('../controllers/status.controller');
const auth = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware');

router.post('/upload', auth, upload.single('media'), statusController.uploadStatus);
router.get('/', auth, statusController.getStatus);
router.post('/delete', auth, statusController.deleteStatus);

module.exports = router;
