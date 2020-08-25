/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from "./../molecules/Header";
import Body from "./../molecules/Body";

export default function Home() {
  return (
    <div css={style}>
      <Header />
      <Body />
    </div>
  );
}

const style = css`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;
