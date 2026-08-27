import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jec-technologies.h4techdev.chatgpt.site'),
  title: 'JEC Technologies | Managed IT Services',
  description:
    'Reliable managed IT, cloud, cybersecurity, and helpdesk services for growing businesses.',
  openGraph: {
    title: 'JEC Technologies',
    description: 'Managed IT Services Excellence',
    type: 'website',
    images: [{ url: '/og.png', width: 1664, height: 936, alt: 'JEC Technologies — Managed IT Services Excellence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEC Technologies',
    description: 'Managed IT Services Excellence',
    images: ['/og.png'],
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
