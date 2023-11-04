import { Text } from 'components/shared';
import { descriptionCss, h1Css, subtitleCss } from './Hero.css';

export function Hero() {
  return (
    <section>
      <Text
        appearance="white"
        as="h1"
        className={h1Css}
        fontWeight={700}
        size="xl"
      >
        Oriyan Ovadia
      </Text>
      <Text
        appearance="white"
        className={subtitleCss}
        fontWeight={500}
        size="lg"
      >
        Senior Frontend Engineer
      </Text>
      <Text className={descriptionCss}>
        I build accessible, inclusive products and digital experiences for the
        web.
      </Text>
    </section>
  );
}
