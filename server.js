// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/timetable', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
// const express = require('express');
// const http = require('http');
// const path = require('path');
// const cors = require('cors');
// const multer = require('multer');
// const Timetable = require('./models/TimetableModel');

// const app = express();
// const server = http.createServer(app);

// app.use(cors());

// const uploadsDirectory = path.join(__dirname, 'uploads');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadsDirectory);
//   },
//   filename: (req, file, cb) => {
//     const { year, section } = req.body;
//     const fileName = `timetable_${year}_${section}_${file.originalname}`;
//     cb(null, fileName);

//     // Insert metadata into MongoDB
//     const timetable = new Timetable({
//       year,
//       section,
//       filename: fileName,
//     });

//     timetable.save((err) => {
//       if (err) {
//         console.error('Error saving timetable metadata:', err);
//       }
//     });
//   },
// });

// const upload = multer({ storage });

// app.post('/upload', upload.single('pdf'), (req, res) => {
//   res.send('PDF uploaded successfully');
// });

// const PORT = process.env.PORT || 3001;

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// app.get('/download/:year/:section', (req, res) => {
//     const { year, section } = req.params;
  
//     Timetable.findOne({ year, section }, (err, timetable) => {
//       if (err || !timetable) {
//         res.status(404).send('Timetable not found');
//       } else {
//         const filePath = path.join(uploadsDirectory, timetable.filename);
//         res.download(filePath);
//       }
//     });
//   });
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/timetable', { useNewUrlParser: true, useUnifiedTopology: true });

const fileSchema = new mongoose.Schema({
  filename: String,
  data: Buffer,
},{collection:'timetables'});

const File = mongoose.model('File', fileSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  const { originalname, buffer } = req.file;

  const newFile = new File({
    filename: originalname,
    data: buffer,
  });

  await newFile.save();
  res.send('File uploaded successfully');
});

app.get('/download/:filename', async (req, res) => {
  const { filename } = req.params;

  const file = await File.findOne({ filename });

  if (file) {
    res.set('Content-Type', 'application/octet-stream');
    res.send(file.data);
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
