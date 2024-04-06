// multerConfig.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage/restaurant');
    },
    filename: (req, file, cb) => {
        const restaurant_name = req.body.restaurant_name.replace(/\s/g, '');
        const filename = `${restaurant_name}${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
});

module.exports = upload;
