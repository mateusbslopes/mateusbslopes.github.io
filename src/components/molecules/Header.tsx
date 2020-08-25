/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FormattedMessage } from "react-intl";

export default function Header() {
  return <header css={style}><FormattedMessage id="Header"/></header>;
}

const style = css`
`;
