import { ParallaxBanner } from 'react-scroll-parallax';

export default function LaptopBanner() {
  return (
    <ParallaxBanner
      className="your-class"
      layers={[
        {
          image: '/media/laptop-banner-min.jpeg',
          amount: 0.3,
        },
      ]}
      style={{
        height: '400px',
      }}
    />
  );
}
