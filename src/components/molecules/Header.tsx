/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FormattedMessage } from "react-intl";

export default function Header() {
  return (
    <header css={style}>
      <FormattedMessage id="Header" />
    </header>
  );
}

const style = ({ colors }: any) => css`
  border-bottom: 1px ${colors.secundary[900]} solid;
`;
