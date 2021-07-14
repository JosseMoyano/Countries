const { Router } = require('express');
const country  = require('./country.js')
const activity  = require('./activity.js')

const router = Router();

router.use('/countries', country);
router.use('/activities', activity);

module.exports = router;
