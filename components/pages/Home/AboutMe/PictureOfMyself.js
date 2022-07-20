import { css } from '@emotion/react';
import Image from 'components/shared/Image/Image';
import useIsMobile from 'hooks/useIsMobile';
import { Parallax } from 'react-scroll-parallax';

const IMG_HEIGHT = 600;
const IMG_WIDTH = 600;

export default function PictureOfMyself() {
  const isMobile = useIsMobile();

  return (
    <Parallax disabled={isMobile} y={[-10, 60]}>
      <Image
        alt=""
        src="/media/picture-of-myself-min.png"
        height={IMG_HEIGHT}
        width={IMG_WIDTH}
      />
    </Parallax>
  );
}
