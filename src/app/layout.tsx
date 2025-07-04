import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Fruity Store',
  description:
    'Your one-stop store for fresh fruits delivered to your doorstep',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        rel: 'icon',
        type: 'image/x-icon',
      },
      {
        url: '/images/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        rel: 'apple-icon',
      },
      {
        url: '/images/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        rel: 'icon',
      },
      {
        url: '/images/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        rel: 'icon',
      },
      { url: '/images/site.webmanifest', rel: 'manifest' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
