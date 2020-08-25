/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FormattedMessage } from "react-intl";

export default function Body() {
  return (
    <div css={style}>
      <title>
        <FormattedMessage id="introduction" />
      </title>
    </div>
  );
}

const style = ({ font }: any) => css`
  title {
    font-size: ${font.sizes.title}rem;
  }
`;
