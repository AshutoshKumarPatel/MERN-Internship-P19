const express = require("express");
const router = express.Router();

const { catchErrors } = require("@/handlers/errorHandlers");
const { isValidUserToken } = require("../../middleware/isValidUserToken");
const { birthdayController, formFieldController } = require("@/controllers/eventController");
const uploadMiddleware = require("@/middleware/uploadMiddleware");

const uploadPosterPic = uploadMiddleware('./public/uploads/posterImage').single('posterPath');

router.route('/birthday/create').post(isValidUserToken, uploadPosterPic, catchErrors(birthdayController.create));
router.route('/birthday/get/:id').get(catchErrors(birthdayController.read));
router.route('/birthday/get/').get(catchErrors(formFieldController));
router.route('/birthday/update/:id').put(catchErrors(birthdayController.update));
router.route('/birthday/delete/:id').delete(catchErrors(birthdayController.delete));

module.exports = router;