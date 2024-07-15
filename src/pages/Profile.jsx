import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import profileImageIcon from '../images/profile.jpg'; 
import Navbar from '../components/Navbar';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box'

export default function ImgMediaCard() {
  const [profileImage, setProfileImage] = React.useState(profileImageIcon); // State to store the selected image
  const name = 'Student_Name';
  const year = 'Pursuing_Year';
  const Roll = 'Roll_No';

  // Function to handle the file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file

    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
      setProfileImage(imageUrl); // Set the selected image in state
    }
  };

  return (
    <>
    <Navbar />
      <Box height={100} />
      <Sidenav />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      

      <Card sx={{ maxWidth: 474 }}>
        <CardMedia
          component="img"
          alt={profileImageIcon}
          height="474"
          width="474"
          image={profileImage || {profileImageIcon}}
        />
        <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: '10px' }}
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ color: 'brown' }}>
            Student Name: {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" style={{ color: 'brown' }}>
            Year: {year}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" style={{ color: 'brown' }}>
            Roll Number: {Roll}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Attendance</Button>
          <Button size="small">View Internal Marks</Button>
        </CardActions>
      </Card>
    </div>
    </>
  );
}
