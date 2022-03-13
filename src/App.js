import Button from '@mui/material/Button';
import {
  Box,
  Container,
  createTheme,
  Grid,
  TextareaAutosize,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import StarRatings from './Components/StarRatings';
import { useForm } from 'react-hook-form';

const theme = createTheme({
  palette: {
    primary: {
      main: blue['A100'],
    },
  },
});

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth="xs">
          <Box
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '#696970',
            }}
          >
            <Typography component="h2" variant="h5">
              Rasslin Tracker
            </Typography>
            <Box component="form" noValidate sx={{ width: 300, mt: 3 }}>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="secondWrestler"
                    id="second-Wrestler"
                    fullWidth
                    label="Wrestler #2"
                    autoFocus
                  />
                </Grid>
                <StarRatings />
                <TextareaAutosize style={{ width: 500 }} placeholder="Notes" />
              </Grid>
            </Box>
            <Button variant="contained">Track</Button>
          </Box>
        </Container>
      </form>
    </ThemeProvider>
  );
}

export default App;
