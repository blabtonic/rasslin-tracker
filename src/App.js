import Button from '@mui/material/Button';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { lime } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lime['A400'],
    },
  },
});

function App() {
  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        <Button variant="contained">Hello World</Button>
      </ThemeProvider>
    </Container>
  );
}

export default App;
