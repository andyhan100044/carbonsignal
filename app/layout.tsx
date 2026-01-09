import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CarbonSignal - 碳信号平台',
  description: '碳信用领域的CoinMarketCap，提供碳市场数据、AI分析和订阅服务',
  keywords: [
    'carbon credit',
    'carbon market',
    'carbon trading',
    'carbon signal',
    'carbon neutral',
    'carbon emissions',
    'carbon offset',
    'climate',
    'sustainability'
  ],
  authors: [{ name: 'CarbonSignal Team' }],
  creator: 'CarbonSignal',
  publisher: 'CarbonSignal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    title: 'CarbonSignal - 碳信号平台',
    description: '碳信用领域的CoinMarketCap，提供碳市场数据、AI分析和订阅服务',
    siteName: 'CarbonSignal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarbonSignal - 碳信号平台',
    description: '碳信用领域的CoinMarketCap，提供碳市场数据、AI分析和订阅服务',
    creator: '@carbonsignal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
