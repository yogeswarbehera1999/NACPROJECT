const express = require("express");
const router = express.Router();
const supervisorController = require("../controllers/supervisorController");
const firebaseAuth = require("../middleware/firebaseAuth");
const upload = require("../middleware/uploadMiddleware");

// Route to submit machinery defect with photo
router.post(
  "/machinery-defect",
  firebaseAuth,
  upload.single("photo"), // Middleware for file upload
  supervisorController.addMachinery
);

// Route to submit Qube Fulfillment (no photo expected)
router.post(
  "/qube-fulfillment",
  firebaseAuth,
  supervisorController.addQube
);

// Route to submit Mo Khata Entry (no photo expected)
router.post(
  "/mokhata-entry",
  firebaseAuth,
  supervisorController.addMoKhata
);

// Route to get vehicle tracking data
router.get("/vehicles", firebaseAuth, supervisorController.getVehicleData);

module.exports = router;
