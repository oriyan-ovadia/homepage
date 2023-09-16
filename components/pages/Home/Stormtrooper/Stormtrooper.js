import { css } from '@emotion/react';

const IMG_URL =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dc99moh-92b71ad7-4b91-4583-9835-fe029b8d285c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGM5OW1vaC05MmI3MWFkNy00YjkxLTQ1ODMtOTgzNS1mZTAyOWI4ZDI4NWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QN_Tr74gitGVDlfQ3XUGhvTYIwG6_OFJ-DMhXfTVmJ8';

const stormtrooperCss = css`
  position: relative;
`;

const imgCss = css`
  position: absolute;
  bottom: -145px;
  right: 50px;
  width: 110px;
`;

export function Stormtrooper() {
  return (
    <div css={stormtrooperCss}>
      <img css={imgCss} src={IMG_URL} />
    </div>
  );
}
