import { css, keyframes } from '@emotion/react';
import ArrowDownIcon from 'components/shared/icons/ArrowDownIcon';
import RightArrowIcon from 'components/shared/icons/RightArrowIcon';
import Text from 'components/shared/Text/Text';
import {
  colors,
  desktopUp,
  mobileOnly,
  tabletOnly,
  tabletUp,
} from 'styles/utils';

const bounceKeyframes = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateY(10px);
  }
`;

const regBgCss = css`
  background-color: ${colors.red};
  position: absolute;

  ${mobileOnly} {
    bottom: 0;
    top: 30%;
    left: 0;
    right: 0;
  }

  ${tabletUp} {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 60%;
  }

  ${tabletOnly} {
    width: 80%;
  }
`;

const scrollDownWrapperCss = css`
  position: absolute;
  font-size: 1.2rem;

  ${mobileOnly} {
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
  }

  ${tabletUp} {
    bottom: 25px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const scrollDownTextCss = css`
  display: none;

  ${tabletUp} {
    display: flex;
    align-items: center;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }
`;

const arrowDownCss = css`
  color: white;
  width: 2.7rem;

  ${tabletUp} {
    margin-top: 12px;
    width: 20px;
    animation: ${bounceKeyframes} 800ms cubic-bezier(0.7, 0, 0.3, 1) infinite
      alternate;
  }
`;

export default function RedRibbon() {
  return (
    <div css={regBgCss}>
      <div css={scrollDownWrapperCss}>
        <Text css={scrollDownTextCss} color="white">
          Scroll down
        </Text>
        <ArrowDownIcon css={arrowDownCss} />
      </div>
    </div>
  );
}
