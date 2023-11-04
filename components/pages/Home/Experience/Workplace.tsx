import { Tag, Text } from 'components/shared';
import { ArrowRightUpIcon } from 'components/shared/icons/ArrowRightUpIcon';
import type { Workplace as _Workplace } from 'types';
import {
  anchorTakeoverCss,
  arrowIconCss,
  companyName,
  descriptionCss,
  detailsCss,
  durationCss,
  hoverCss,
  tagsCss,
  titleCss,
  workplaceCss,
} from './Workplace.css';

interface WorkplaceProps extends React.HTMLAttributes<HTMLDivElement> {
  workplace: _Workplace;
}

export function Workplace({ workplace }: WorkplaceProps) {
  const { description, position, name, duration, tags, url } = workplace;

  return (
    <div className={workplaceCss}>
      <div className={hoverCss}></div>
      <div className={durationCss}>
        <Text isUpperCase size="xs">
          {duration}
        </Text>
      </div>
      <div className={detailsCss}>
        <h3 className={titleCss}>
          <a href={url} rel="noreferrer" target="_blank">
            {position} at{' '}
            <span className={companyName}>
              {name} <ArrowRightUpIcon className={arrowIconCss} />
            </span>
            <div className={anchorTakeoverCss}></div>
          </a>
        </h3>
        <div>
          {description.map((text, i) => (
            <Text className={descriptionCss} key={i} size="sm">
              {text}
            </Text>
          ))}
        </div>
        <div className={tagsCss}>
          {tags.map(tagName => (
            <Tag key={tagName}>{tagName}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
