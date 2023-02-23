const { Router } = require('express');

const Controller = require('@controllers/programming_languages.controller');

const router = Router();

router.route('/').get(Controller.getMultiple);

module.exports = router;