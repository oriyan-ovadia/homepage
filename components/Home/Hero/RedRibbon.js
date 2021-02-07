import { css } from '@emotion/react';
import ArrowDownIcon from 'components/shared/icons/ArrowDownIcon';
import Text from 'components/shared/Text/Text';
import {
  colors,
  desktopUp,
  mobileOnly,
  tabletOnly,
  tabletUp,
} from 'styles/utils';

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
    bottom: 15px;
    right: 0;
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
    display: none;
  }
`;

export default function RedRibbon() {
  return (
    <div css={regBgCss}>
      <div css={scrollDownWrapperCss}>
        <ArrowDownIcon css={arrowDownCss} />
        <Text css={scrollDownTextCss} color="white">
          Scroll down
        </Text>
      </div>
    </div>
  );
}
