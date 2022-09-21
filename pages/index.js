import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
      <React.Fragment>
        <Container maxWidth="md">
          <Box sx={{ bgcolor: '#cfe8fc' }} />
            <Box
                sx={{
                    height: 100,
                    backgroundColor: '#f4f4f4',
                }}
            >
                <Typography variant="h1" component="h2">
                    h1. Heading
                </Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid xs={8}>
                    <Typography variant="body1" component="h2">
                     hello
                    </Typography>

                </Grid>
                <Grid xs={4}>
                    <Typography variant="body2" component="h2">
                      hello
                    </Typography>

                </Grid>
            </Grid>
        </Container>
      </React.Fragment>
  );
}