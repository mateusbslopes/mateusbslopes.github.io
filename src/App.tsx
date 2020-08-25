import React from "react";
import Home from "./components/pages/Home";
import { Global, css } from "@emotion/core";
import { connect, ConnectedProps } from "react-redux";
import { ThemeProvider } from "emotion-theming";
import themes from "./themes";
import { IntlProvider } from "react-intl";
import loadTranslations from "./translations";

function App({ theme, locale }: AppProps) {
  return (
    <ThemeProvider theme={(themes as any)[theme]}>
      <IntlProvider locale={locale} messages={loadTranslations(locale)}>
        <Global styles={style} />
        <Home />
      </IntlProvider>
    </ThemeProvider>
  );
}

const style = ({colors, font}: any) => {
  return css`
    html {
      color: ${colors.secundary[900]};  
      background-color: ${colors.primary[100]};
      font-size: ${font.sizes.base}px;
      font-family: ${font.family};
    }

    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    title {
      display: unset;
      font-size: ${font.sizes.title}rem;
      color: ${colors.ternary[500]};
    }

    a {
      color: ${colors.ternary[500]};
      text-decoration: none;
    }
  `;
};

const mapStateToProps = (state: any) => ({
  theme: state.theme.name,
  locale: state.localization.locale,
});

const connector = connect(mapStateToProps);
type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
