const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/Thought', thoughtRoutes);
router.use('/Users', userRoutes);

module.exports = router;