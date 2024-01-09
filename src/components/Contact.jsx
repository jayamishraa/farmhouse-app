// ContactUs.js
import React from 'react';
import { Typography, Paper, Grid, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container className='section'>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography>
              123 Main Street,
              <br />
              Cityville, State,
              <br />
              Country - 12345
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Phone Number
            </Typography>
            <Typography>+1 (123) 456-7890</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Typography>contact@example.com</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
