import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const FacultyRegistrationForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container className={classes.formContainer} component="main" maxWidth="xs">
      <Typography variant="h5">Faculty Registration</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="First Name"
          fullWidth
          className={classes.textField}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          label="Last Name"
          fullWidth
          className={classes.textField}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          variant="outlined"
          label="Email"
          fullWidth
          type="email"
          className={classes.textField}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormControl variant="outlined" fullWidth className={classes.textField}>
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            labelId="department-label"
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <MenuItem value="computerScience">Computer Science</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            {/* Add more department options as needed */}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submitButton}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default FacultyRegistrationForm;
