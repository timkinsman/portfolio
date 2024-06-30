import { Box, CSS } from '@nayhoo/components';
import React, { useEffect } from 'react';

type FadeInSectionProps = {
  children: React.ReactNode;
  // isVisibleByDefault?: boolean;
  // infinite?: boolean;
  css?: CSS;
};

/**
 *
 * @see https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
 */
export function FadeInSection({
  children,
  // isVisibleByDefault = false,
  // infinite = false,
  css = {},
}: FadeInSectionProps) {
  // const [isVisible, setVisible] = React.useState(isVisibleByDefault);
  const [isVisible, setVisible] = React.useState(false);
  // const domRef = React.useRef<HTMLDivElement>(null);
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       const { isIntersecting } = entry;
  //       if (!infinite && !isIntersecting) {
  //         return;
  //       }
  //       setVisible(entry.isIntersecting);
  //     });
  //   });
  //   const div = domRef.current;
  //   if (div) observer.observe(div);
  //   return () => {
  //     if (div) observer.unobserve(div);
  //   };
  // }, [infinite]);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Box
      css={{
        opacity: isVisible ? '1' : '0',
        transition: 'opacity 1s, transform 1s',
        transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
        ...css,
      }}
      // ref={domRef}
    >
      {children}
    </Box>
  );
}
