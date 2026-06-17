import type { Metadata } from 'next';
import './globals.css';
import { NavBar } from '@/components/nav-bar';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Shengyao Tang — Portfolio',
  description: 'Personal portfolio of Shengyao Tang — Financial Engineering, ML, and Full-Stack Development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="relative"
        style={{
          backgroundImage: 'url(/background.jpg)',
            // 'url(https://images.unsplash.com/photo-1557682260-96773eb01377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwb3JhbmdlJTIweWVsbG93JTIwZ3JhZGllbnQlMjBtaW5pbWFsaXN0JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzgwNDM3NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // backgroundAttachment: 'fixed',
        }}
      >
        {/* Soft white overlay */}
        <div className="absolute inset-0 bg-white/15 pointer-events-none z-0" />

        <div className="relative flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
