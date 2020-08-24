/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export default function Header() {
  return <header css={style}>Header</header>;
}

const style = css`
  background-color: red;
`;