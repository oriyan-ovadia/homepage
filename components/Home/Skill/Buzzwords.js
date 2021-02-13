import { css } from '@emotion/react';
import Text from 'components/shared/Text/Text';
import AngularLogo from './Logos/AngularLogo';
import NgrxLogo from './Logos/NgrxLogo';
import ReactLogo from './Logos/ReactLogo';
import ReduxLogo from './Logos/ReduxLogo';
import RxjsLogo from './Logos/RxjsLogo';
import MobxLogo from './Logos/MobxLogo';
import NextJsLogo from './Logos/NextJsLogo';
import ReactQueryLogo from './Logos/ReactQueryLogo';
import GraphQlLogo from './Logos/GraphQlLogo';
import WebpackLogo from './Logos/WebpackLogo';
import PhpLogo from './Logos/PhpLogo';
import MySqlLogo from './Logos/MySqlLogo';
import JqueryLogo from './Logos/JqueryLogo';
import TypescriptLogo from './Logos/TypescriptLogo';
import GitLogo from './Logos/GitLogo';
import { viewport } from 'styles/utils';

const buzzwords = [
  [ReactLogo, 'React'],
  [NextJsLogo, 'Next.js'],
  [ReduxLogo, 'Redux'],
  [MobxLogo, 'MobX'],
  [ReactQueryLogo, 'React Query'],
  [AngularLogo, 'Angular'],
  [NgrxLogo, 'NgRx'],
  [RxjsLogo, 'RxJS'],
  [GraphQlLogo, 'GraphQL'],
  [WebpackLogo, 'Webpack'],
  [PhpLogo, 'PHP'],
  [MySqlLogo, 'MySQL'],
  [JqueryLogo, 'jQuery'],
  [TypescriptLogo, 'TypeScript'],
  [GitLogo, 'Git'],
];

const buzzwordsCss = css`
  display: grid;
  grid-row-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 90px;

  ${viewport.smallOnly} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const logoCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90px;
`;

const labelCss = css``;

export default function Buzzwords() {
  return (
    <div css={buzzwordsCss}>
      {buzzwords.map(([Logo, label]) => {
        return (
          <div key={label}>
            <div css={logoCss}>
              <Logo />
            </div>
            <Text css={labelCss} size="base" textAlign="center">
              {label}
            </Text>
          </div>
        );
      })}
    </div>
  );
}
