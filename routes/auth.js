const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

const isAuth = require('../middleware/auth');
const isStaff = require('../middleware/staff');
const isStudent = require('../middleware/student');


router.get('/me', [isAuth, isStaff, isStudent], authController.me);

router.get('/:userId', authController.userId);

router.post('/signup', authController.signup);

router.post('/login', authController.login);

module.exports = router;