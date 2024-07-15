import React from 'react';
import Typography from '@mui/material/Typography';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import "../Dash.css"; 
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CampaignIcon from '@mui/icons-material/Campaign';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box height={100} />
      <h1 className='heading'>Welcome,Student_Name</h1>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Stack direction="row" spacing={2}>
            <div className='style1'>
              <Card sx={{ maxWidth: 800 }} className='card1'>
              <Link to="/fileuploader" className="link-without-underline">
                <CardActionArea>
                  <CardContent>
                    <EventAvailableIcon />
                    <Typography gutterBottom variant="h5" component="div" height={10 + "vh"} width={50 + "vh"} sx={{color:"brown"}} >
                      File Uploader
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color:"rgb(47, 25, 216)"}} className='typo1'>
                      View File
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Link>
              </Card>
            </div>
            <div className='style2'>
              <Card sx={{ maxWidth: 800 }} className='card2'>
              <Link to="/timetable" className="link-without-underline">
                <CardActionArea>
                  <CardContent>
                    <CalendarViewMonthIcon />
                    <Typography gutterBottom variant="h5" component="div" height={10 + "vh"} width={50 + "vh"} sx={{color:"brown"}} >
                      Attendance
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color:"rgb(47, 25, 216)"}} className='typo1'>
                      View Attendance
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Link>
              </Card>
            </div>
            <div className='style3'>
              <Card sx={{ maxWidth: 800 }} className='card3'>
              <Link to="/books" className="link-without-underline">
                <CardActionArea>
                  <CardContent>
                    <MenuBookIcon />
                    <Typography gutterBottom variant="h5" component="div" height={10 + "vh"} width={50 + "vh"} sx={{color:"brown"}} >
                      Book Center
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color:"rgb(47, 25, 216)"}} className='typo1'>
                      View Materials
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Link>
              </Card>
            </div>
          </Stack>
          <Box height={100} />
          <Stack direction="row" spacing={2}>
          <div className='style4'>
              <Card sx={{ maxWidth: 800 }} className='card4'>
              <Link to="/filedownloader" className="link-without-underline">
                <CardActionArea>
                  <CardContent>
                    <AssignmentIcon />
                    <Typography gutterBottom variant="h5" component="div" height={10 + "vh"} width={50 + "vh"} sx={{color:"brown"}} >
                      File Downloader
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color:"rgb(47, 25, 216)"}} className='typo1'>
                      View File
                    </Typography>
                  </CardContent>
                </CardActionArea>
                </Link>
              </Card>
            </div>
            
            </Stack>
            
        </Box>
      </Box>
    </>
  );
}
