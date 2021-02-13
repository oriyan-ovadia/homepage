import { css } from '@emotion/react';
import Image from 'components/shared/Image/Image';
import useIsMobile from 'hooks/useIsMobile';
import { Parallax } from 'react-scroll-parallax';

const IMG_HEIGHT = 504;
const IMG_WIDTH = 550;

const imgCss = css`
  width: 100%;
  max-width: ${IMG_WIDTH}px;
  max-height: ${IMG_HEIGHT}px;
`;

export default function PictureOfMyself() {
  // Disable parallax effect on mobile
  const isMobile = useIsMobile();

  return (
    <Parallax disabled={isMobile} y={[-10, 60]}>
      {/* <img
        alt="Oriyan Ovadia"
        css={imgCss}
        src="/media/picture-of-myself-min.jpg"
      /> */}
      <Image
        alt="Oriyan Ovadia"
        src="/media/picture-of-myself-min.jpg"
        height={IMG_HEIGHT}
        width={IMG_WIDTH}
      />
    </Parallax>
  );
}
