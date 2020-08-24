/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export default function Body() {
  return <body css={style}>Body</body>;
}

const style = css`
  background-color: blue;
`
