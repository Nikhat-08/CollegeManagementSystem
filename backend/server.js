const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/timetable', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Create 'uploads' directory in your project
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const pdfSchema = new mongoose.Schema({
  year: String,
  section: String,
  filename: String,
});

const PDF = mongoose.model('PDF', pdfSchema);

app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const { year, section } = req.body;
    const filename = req.file.filename;

    const pdf = new PDF({
      year,
      section,
      filename,
    });

    await pdf.save();

    res.status(200).send('PDF uploaded successfully');
  } catch (error) {
    console.error('Error uploading PDF:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});