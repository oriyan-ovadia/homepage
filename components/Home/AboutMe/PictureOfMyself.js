import { css } from '@emotion/react';
import Image from 'components/shared/Image/Image';
import { Parallax } from 'react-scroll-parallax';

export default function PictureOfMyself() {
  return (
    <Parallax disabled y={[-10, 60]}>
      <img
        alt="Oriyan Ovadia"
        src="/media/picture-of-myself-min.jpg"
        width={550}
        height={504}
      />
      {/* <Image
        alt="Oriyan Ovadia"
        src="/media/picture-of-myself-min.jpg"
        width={550}
        height={504}
      /> */}
    </Parallax>
  );
}
