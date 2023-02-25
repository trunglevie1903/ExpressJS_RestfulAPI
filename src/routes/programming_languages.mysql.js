const { Router } = require('express');

const Controller = require('@middlewares/programming_languages.mysql.middlewares');

const router = Router();

router.route('/').get(Controller.getMultiple).post(Controller.create);
router.route('/:id').patch(Controller.update).delete(Controller.remove);

module.exports = router;