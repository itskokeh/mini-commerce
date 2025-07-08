import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/Footer/Footer';
import { QueryProvider } from '@/lib/queryClient';

function DataFunction() {
  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon='{"token": "dfe9265becab4e4e86e4e99f71f6bfa2"}'
    />
  );
}

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
  metadataBase: new URL('https://fruitystore.kokeh.dev'),
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
  openGraph: {
    title: 'Fruity Store',
    description: 'Fresh fruits delivered to your doorstep',
    url: 'https://fruitystore.kokeh.dev',
    siteName: 'Fruity Store',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'en_NG',
    type: 'website',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-light`}
      >
        <DataFunction />
        <QueryProvider>
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
