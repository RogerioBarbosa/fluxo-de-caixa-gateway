const { Router } = require('express');
const controller = require('../api/controller');

const router = Router();

router.route('/about').get(controller.about);
router.route('/transaction').post(controller.postTransaction);

module.exports = router;