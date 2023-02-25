const { Router } = require('express');
const { getPL, getPLById, createPL, updatePL, deletePL } = require('@middlewares/programming_languages.mongodb.middlewares');

const router = Router();
router.route('/').get(getPL).post(createPL);
router.route('/:id').get(getPLById).patch(updatePL).delete(deletePL);

module.exports = router;