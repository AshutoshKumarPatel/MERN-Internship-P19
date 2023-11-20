const express = require("express");
const router = express.Router();

const { catchErrors } = require("@/handlers/errorHandlers");
const { login, signup, logout } = require("@/controllers/authJwtController");

router.route('/login').post(catchErrors(login));
router.route('/signup').post(catchErrors(signup));
router.route('/logout').post(catchErrors(logout));
// router.route('/delUser').delete(catchErrors(delUser));

module.exports = router;