const express = require('express');
const usersController = require(`${__dirname}/../controllers/usersController.js`)
const router = express.Router();

router.route('/').get(usersController.getAllUsers).post(usersController.createUser);
router.route('/:id').get(usersController.getUsers).patch(usersController.updateUser).delete(usersController.deleteUser);

module.exports = router;
