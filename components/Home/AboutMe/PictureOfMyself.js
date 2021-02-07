import { css } from '@emotion/react';
import Image from 'components/shared/Image/Image';
import { Parallax } from 'react-scroll-parallax';

export default function PictureOfMyself() {
  return (
    <Parallax y={[0, 80]}>
      <Image src="/media/picture-of-myself-min.jpg" width={550} height={504} />
    </Parallax>
  );
}
