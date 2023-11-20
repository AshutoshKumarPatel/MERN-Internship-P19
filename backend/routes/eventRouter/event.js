const express = require("express");
const router = express.Router();

const { catchErrors } = require("@/handlers/errorHandlers");

const { birthdayController } = require("@/controllers/eventController");

router.route('/birthday/create').post(catchErrors(birthdayController.create));
router.route('/birthday/get/:id').get(catchErrors(birthdayController.read));
router.route('/birthday/get/').get(catchErrors(birthdayController.readAll));
router.route('/birthday/update/:id').put(catchErrors(birthdayController.update));
router.route('/birthday/delete/:id').delete(catchErrors(birthdayController.delete));

module.exports = router;