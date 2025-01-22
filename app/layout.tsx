import type { Metadata } from 'next';
import './globals.css';

/**
 * import font from google-font
 */
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
});

/**
 * setup for seo optimization
 */
export const metadata: Metadata = {
  title: 'Map Technology',
  description:
    'M.A.P. Tech, we see technology as more than just a tool—it’s a catalyst for progress and innovation. Since our founding in 2024, we have been driven by a clear mission: to empower businesses with cutting-edge IT solutions tailored specifically to their needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
