
import Main from "./components/main";
import Header from "./components/header";
import { ThemeProvider, Container } from "@mui/material";
import theme from "./assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Header />
          <Main />
        </div>
    </ThemeProvider>
  );
}

export default App;
