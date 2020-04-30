'use strict'
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router
  .route("/")
  .get(controller.getAllUsers)
  .post(controller.createUser);
router
  .route("/:id")
  .get(controller.getUser)
  .put(controller.updateUser)
  .delete(controller.deleteUser);

  module.exports = router;