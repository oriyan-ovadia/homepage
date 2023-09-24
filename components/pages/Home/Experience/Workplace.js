import { Tag } from 'components/shared/Tag/Tag';
import Text from 'components/shared/Text/Text';
import { colors, fontSize, viewport } from 'styles/utils';

import { css } from '@emotion/react';
import { ArrowRightUpIcon } from 'components/shared/icons/ArrowRightUpIcon';

const workplaceCss = css`
  ${viewport.small} {
    &:active {
      .title {
        color: ${colors.primaryLight};
      }
    }
  }

  ${viewport.large} {
    display: flex;
    column-gap: 10px;
    position: relative;

    &:hover {
      .bg {
        opacity: 1;
      }

      .title {
        color: ${colors.primaryLight};
      }

      .arrow-icon {
        transform: translate(0.18rem, -0.18rem);
      }
    }
  }
`;

const detailsCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  z-index: 1;
`;

const hoverCss = css`
  opacity: 0;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);

  box-shadow: 0 0 #0000, 0 0 #0000, inset 0 1px 0 0 rgba(148, 163, 184, 0.1);

  border-radius: 0.25rem;
  z-index: 0;

  top: -1rem;
  bottom: -1rem;
  left: -1.5rem;
  right: -1.5rem;
  position: absolute;

  ${viewport.small} {
    display: none;
  }
`;

const durationCss = css`
  width: 120px;
  flex-shrink: 0;
  letter-spacing: 0.025em;
  font-weight: 600;
  color: #64748b;
  z-index: 1;
  padding-block: 0.25rem 0.5rem;
`;

const titleCss = css`
  font-size: ${fontSize.md};
  font-weight: 500;
  color: ${colors.white};
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
`;

const arrowIconCss = css`
  width: 16px;
  height: 16px;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
`;

const descriptionCss = css`
  line-height: 1.6;

  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const companyName = css`
  display: inline-block;
`;

const tagsCss = css`
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  row-gap: 8px;
`;

const anchorTakeoverCss = css`
  position: absolute;
  top: -1rem;
  bottom: -1rem;
  left: -1.5rem;
  right: -1.5rem;

  ${viewport.small} {
    display: none;
  }
`;

export function Workplace({ workplace }) {
  const { description, id, position, name, duration, tags, url } = workplace;
  const title = `${position} at ${name}`;

  return (
    <div css={workplaceCss}>
      <div css={hoverCss} className="bg"></div>
      <div css={durationCss}>
        <Text isUpperCase size="xs">
          {duration}
        </Text>
      </div>
      <div css={detailsCss}>
        <h3 className="title" css={titleCss}>
          <a href={url} target="_blank">
            {position} at{' '}
            <span css={companyName}>
              {name}{' '}
              <ArrowRightUpIcon className="arrow-icon" css={arrowIconCss} />
            </span>
            <div css={anchorTakeoverCss}></div>
          </a>
        </h3>
        <div>
          {description.map((text, i) => (
            <Text css={descriptionCss} key={i} size="sm">
              {text}
            </Text>
          ))}
        </div>
        <div css={tagsCss}>
          {tags.map(tagName => (
            <Tag key={tagName}>{tagName}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
