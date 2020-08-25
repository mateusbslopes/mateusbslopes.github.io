/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FormattedMessage, useIntl } from "react-intl";
import { connect, ConnectedProps } from "react-redux";
import { setLocale as setLocaleAction } from "../../store/ducks/localization";
import { setTheme as setThemeAction } from "../../store/ducks/theme";

export function Header({ locale, setLocale, theme, setTheme }: HeaderProps) {
  const intl = useIntl();

  return (
    <header css={style}>
      <div>
        <label id="locale_selector_label" htmlFor="locale_selector">
          <FormattedMessage id="locale" />:
        </label>
        <select
          id="locale_selector"
          onChange={(event) => setLocale(event.target.value)}
          value={locale}
          aria-labelledby="locale_selector_label"
        >
          <option value="pt-BR">
            {intl.formatMessage({ id: "portugueseBR" })}
          </option>
          <option value="en-US">
            {intl.formatMessage({ id: "englishUS" })}
          </option>
        </select>
      </div>
      <div>
        <label id="theme_selector_label" htmlFor="theme_selector">
          <FormattedMessage id="theme" />:
        </label>
        <select
          id="theme_selector"
          aria-labelledby="theme_selector_label"
          onChange={(event) => setTheme(event.target.value)}
          value={theme}
        >
          <option value="dark">{intl.formatMessage({ id: "dark" })}</option>
          <option value="light">{intl.formatMessage({ id: "light" })}</option>
        </select>
      </div>
    </header>
  );
}

const style = ({ colors }: any) => css`
  border-bottom: 1px ${colors.secundary[900]} solid;
  padding: 20px;
  max-width: 550px;
  margin: 0 auto;
`;

const mapStateToProps = (state: any) => ({
  locale: state.localization.locale,
  theme: state.theme.name,
});

const mapDispatchToProps = {
  setLocale: (locale: string) => setLocaleAction(locale),
  setTheme: (theme: string) => setThemeAction(theme),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);
