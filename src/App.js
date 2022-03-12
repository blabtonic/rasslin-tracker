import Button from '@mui/material/Button';
import {
  Box,
  Container,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue['A100'],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#696969',
          }}
        >
          <Typography component="h2" variant="h5">
            Rasslin Tracker
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstWrestler"
                  id="first-Wrestler"
                  fullWidth
                  label="Wrestler #1"
                  autoFocus
                />
              </Grid>
            </Grid>
          </Box>
          <Button variant="contained">Track</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
