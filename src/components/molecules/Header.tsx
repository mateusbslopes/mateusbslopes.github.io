/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FormattedMessage, useIntl } from "react-intl";
import { connect, ConnectedProps } from "react-redux";
import { setLocale as setLocaleAction } from "../../store/ducks/localization";

export function Header({ locale, setLocale }: HeaderProps) {
  const intl = useIntl();

  return (
    <header css={style}>
      <select
        onChange={(event) => setLocale(event.target.value)}
        value={locale}
      >
        <option value="pt-BR">
          {intl.formatMessage({ id: "portugueseBR" })}
        </option>
        <option value="en-US">{intl.formatMessage({ id: "englishUS" })}</option>
      </select>
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
});

const mapDispatchToProps = {
  setLocale: (locale: string) => setLocaleAction(locale),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);
