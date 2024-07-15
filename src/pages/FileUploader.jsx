// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   InputLabel,
//   Input,
//   Typography,
//   Box,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import axios from 'axios';

// const Attendance = () => {
//   const [year, setYear] = useState('');
//   const [section, setSection] = useState('');
//   const [pdfFile, setPdfFile] = useState(null);

//   const handleFileChange = (e) => {
//     setPdfFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("year", year);
//       formData.append("section", section);
//       formData.append("pdfFile", pdfFile);

//       // Assuming your PHP script is in the same directory as your React app during development
//       const response = await axios.post('attendance.php', formData);

//       // Handle the response from the server
//       console.log(response.data.message);

//     } catch (error) {
//       console.error('Error uploading PDF:', error);
//     }
//   };

//   return (
//     <Box p={2}>
//       <Typography variant="h5" gutterBottom>
//         Timetable Upload
//       </Typography>
//       <form action='attendance.php' method='post' className='form-control'  encType="multipart/form-data">
//       <Box mb={2}>
//         <InputLabel>Year</InputLabel>
//         <Select
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//           variant="outlined"
//           fullWidth
//         >
//           <MenuItem value="1">Year 1</MenuItem>
//           <MenuItem value="2">Year 2</MenuItem>
//           <MenuItem value="3">Year 3</MenuItem>
//           <MenuItem value="4">Year 4</MenuItem>
//         </Select>
//       </Box>

//       <Box mb={2}>
//         <InputLabel>Section</InputLabel>
//         <Select
//           value={section}
//           onChange={(e) => setSection(e.target.value)}
//           variant="outlined"
//           fullWidth
//         >
//           <MenuItem value="A">Section A</MenuItem>
//           <MenuItem value="B">Section B</MenuItem>
//           <MenuItem value="C">Section C</MenuItem>
//           <MenuItem value="D">Section D</MenuItem>
//         </Select>
//       </Box>

//       <Box mb={2}>
//         <InputLabel className='choosefile'>Upload PDF</InputLabel>
//         <Input type="file" accept=".pdf" onChange={handleFileChange} />
//       </Box>

//       <Button className='btn_pdf' variant="contained" color="primary" onClick={handleUpload}>
//         Upload PDF
//       </Button>
//       </form>
//     </Box>
//   );
// };

// export default Attendance;
import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3001/upload', formData);
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default FileUploader;
