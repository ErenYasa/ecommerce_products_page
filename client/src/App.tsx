import Layout from "@views/layout";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/Global";
import { Header } from "./components/Header";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Layout />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
