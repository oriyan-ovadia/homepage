import { Anchor, PageSection, Text } from 'components/shared';
import HeartIcon from 'components/shared/icons/HeartIcon';
import { footerCss, heartCss } from './Footer.css';

export function Footer() {
  return (
    <PageSection className={footerCss} id="footer">
      <Text size="sm">
        Thank you for scrolling all this way <HeartIcon className={heartCss} />{' '}
        Built with <Anchor href="https://nextjs.org/">Next.js</Anchor>,{' '}
        <Anchor href="https://www.typescriptlang.org/">TypeScript</Anchor> and{' '}
        <Anchor href="https://vanilla-extract.style/">
          Vanilla&nbsp;Extract
        </Anchor>
        , deployed with <Anchor href="https://vercel.com/">Vercel</Anchor>. Code
        is available on{' '}
        <Anchor href="https://github.com/OriyanJ/homepage">GitHub</Anchor>.
      </Text>
    </PageSection>
  );
}
