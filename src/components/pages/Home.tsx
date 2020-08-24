/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Header from "./../molecules/Header";
import Body from "./../molecules/Body";
import Footer from "./../molecules/Footer";

export default function Home() {
  return (
    <div css={style}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

const style = css`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;
