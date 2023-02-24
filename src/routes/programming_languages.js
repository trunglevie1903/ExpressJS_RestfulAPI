const { Router } = require('express');

const Controller = require('@controllers/programming_languages.controller');

const router = Router();

router.route('/').get(Controller.getMultiple).post(Controller.create);
router.route('/:id').patch(Controller.update).delete(Controller.remove);

module.exports = router;