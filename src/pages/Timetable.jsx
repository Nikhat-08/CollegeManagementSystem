import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Container,
} from '@mui/material';

export default function Timetable () {
  const [months] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
  const [years] = useState([2022, 2023, 2024, 2025]);
  const [semesters, setSemesters] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [attendedPeriods, setAttendedPeriods] = useState(0);
  const [totalPeriods, setTotalPeriods] = useState(0);

  const handleCalculateAttendance = () => {
    
    //databace connectivityt
    const randomAttendedPeriods = Math.floor(Math.random() * 20) + 10;
    const randomTotalPeriods = 30;
    
    setAttendedPeriods(randomAttendedPeriods);
    setTotalPeriods(randomTotalPeriods);
  };

  return (
    <body >
    <Container >
      <Typography variant="h4" style={{ margin: '20px 0' }}>
        Attendance Tracker
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <FormControl style={{ minWidth: '120px' }}>
          <InputLabel>Month</InputLabel>
          <Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: '120px' }}>
          <InputLabel>Year</InputLabel>
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: '120px' }}>
          <InputLabel>Semester</InputLabel>
          <Select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            {semesters.map((semester) => (
              <MenuItem key={semester} value={semester}>
                Semester {semester}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" onClick={handleCalculateAttendance}>
          Calculate
        </Button>
      </div>

      <div>
        <Typography variant="h6">Attendance Summary</Typography>
        <Typography variant="body1">
          Attended Periods: {attendedPeriods} / {totalPeriods}
        </Typography>
        <Typography variant="body1">
          Attendance Percentage: {((attendedPeriods / totalPeriods) * 100).toFixed(2)}%
        </Typography>
      </div>
    </Container>
    </body>
  );
};