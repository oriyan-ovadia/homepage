import { ParallaxBanner } from 'react-scroll-parallax';

export default function ParallaxLaptopBanner() {
  return (
    <ParallaxBanner
      className="your-class"
      layers={[
        {
          image: '/media/laptop-bg-min.jpeg',
          amount: 0.3,
        },
      ]}
      style={{
        height: '400px',
      }}
    />
  );
}
