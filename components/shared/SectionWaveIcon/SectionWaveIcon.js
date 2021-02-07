import { css } from '@emotion/react';
import WavesIcon from 'components/shared/icons/WavesIcon';
import { colors } from 'styles/utils';

const wavesIconCss = props => css`
  width: 80px;
  color: ${props.color ? props.color : 'inherit'};
  margin-bottom: 40px;
`;

export default function SectionWaveIcon({ color }) {
  return <WavesIcon css={wavesIconCss({ color })} />;
}
