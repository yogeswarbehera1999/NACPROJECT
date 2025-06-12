const express = require("express");
const router = express.Router();
const citizenController = require("../controllers/citizenController");
const firebaseAuth = require("../middleware/firebaseAuth");
const upload = require("../middleware/uploadMiddleware");

// Route to submit complaint with photo
router.post(
  "/complaint",
  firebaseAuth,
  upload.single("photo"), // Middleware for file upload
  citizenController.addComplaint
);

// Route to fetch complaints for citizen
router.get("/complaints", firebaseAuth, citizenController.getComplaints);

// Route for tracking vehicle
router.get("/track", firebaseAuth, citizenController.trackVehicle);

module.exports = router;
