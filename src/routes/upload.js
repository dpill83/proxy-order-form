const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require('../middleware/upload');
const { auth } = require('../middleware/auth');

// Upload card back image
router.post('/card-back', auth, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Return the file path relative to the uploads directory
    const relativePath = path.relative('src/uploads', req.file.path);
    res.json({
      message: 'File uploaded successfully',
      path: relativePath
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get uploaded file
router.get('/:filename', (req, res) => {
  try {
    const filePath = path.join(__dirname, '..', 'uploads', req.params.filename);
    res.sendFile(filePath);
  } catch (error) {
    res.status(404).json({ error: 'File not found' });
  }
});

module.exports = router; 