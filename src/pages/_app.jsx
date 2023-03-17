import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { AppProps } from "next/app";
import { StylesGlobal } from "../styles/styles.global";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <StylesGlobal />
    </ThemeProvider>
  );
};

App.propTypes = AppProps;

export default App;
