import Button from '@mui/material/Button';
import { Container, createTheme } from '@mui/material';
const theme = createTheme({
  status: {
    danger: '#dd0048',
  },
  palette: {
    primary: {
      main: '#289005',
      darker: '#166f05'
    }
  }
})

function App() {
  return (
    <Container maxWidth="sm">
      <Button variant="contained">Hello World</Button>
    </Container>
  );
}

export default App;
