import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/Global";
import { Header } from "./components/Header";
import Layout from "./views/layout";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Layout />
        </ThemeProvider>
    );
}

export default App;
