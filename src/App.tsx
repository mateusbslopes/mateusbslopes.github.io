import React from "react";
import Home from "./components/pages/Home";
import { Global, css } from "@emotion/core";
import { connect, ConnectedProps } from "react-redux";
import { ThemeProvider } from "emotion-theming";
import themes from "./themes";

function App({ theme }: AppProps) {
  return (
    <ThemeProvider theme={(themes as any)[theme]}>
      <Home />
    </ThemeProvider>
  );
}

const mapStateToProps = (state: any) => ({
  theme: state.theme.name,
});

const connector = connect(mapStateToProps);
type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
