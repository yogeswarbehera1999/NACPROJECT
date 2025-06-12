const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Utility to ensure directory exists
const ensureDirExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Multer storage configuration with dynamic destination based on route
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = "";

    if (req.baseUrl.includes("citizen")) {
      uploadPath = path.join(__dirname, "..", "uploads", "complaint");
    } else if (req.baseUrl.includes("supervisor") && req.path.includes("machinery")) {
      uploadPath = path.join(__dirname, "..", "uploads", "machinery");
    } else {
      uploadPath = path.join(__dirname, "..", "uploads", "other");
    }

    ensureDirExists(uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  }
});

const fileFilter = function (req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed."), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB max
  }
});

module.exports = upload;
