import { Container, CssBaseline, Divider, ThemeProvider, Typography, createTheme } from "@mui/material";
import TablesContainer from "./components/TablesContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Typography
          fontFamily={"Bungee Spice"}
          letterSpacing="4.5px"
          sx={{ fontSize: "28px", padding: "15px", textShadow: "3px 3px rgba(255, 0, 0,0.3)" }}
          variant="h4"
          textAlign="center"
        >
          BRISEGLACE
        </Typography>
        <Divider sx={{ marginBottom: "25px" }} />
        <Typography variant="subtitle2" textAlign="center" paddingBottom="20px">
          Liste des tables
        </Typography>
        <TablesContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
