import localFont from 'next/font/local';

export const calibre = localFont({
  variable: '--font-calibre',
  src: [
    {
      path: '../../public/fonts/Calibre/Calibre-Light.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Calibre/Calibre-Regular.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Calibre/Calibre-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Calibre/Calibre-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const sfmono = localFont({
  variable: '--font-sfmono',
  src: [
    {
      path: '../../public/fonts/SFMono/SFMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFMono/SFMono-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SFMono/SFMono-Semibold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});