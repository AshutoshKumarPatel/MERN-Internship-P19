const express = require("express");
const router = express.Router();

const { catchErrors } = require("@/handlers/errorHandlers");

const { hallOwnerController, musicianController, performerController, cateringController, speakerController } = require("@/controllers/userController");

router.route('/hallOwner').get(catchErrors(hallOwnerController.readAll));
router.route('/catering').get(catchErrors(cateringController.readAll));
router.route('/performer').get(catchErrors(performerController.readAll));
router.route('/musician').get(catchErrors(musicianController.readAll));
router.route('/speaker').get(catchErrors(speakerController.readAll));


module.exports = router;