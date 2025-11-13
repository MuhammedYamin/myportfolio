import '../styles/globals.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedLayout from '../components/AnimatedLayout';

export const metadata = {
  title: 'Muhammed Yamin — Portfolio',
  description: 'Web applications that blend performance with simplicity. MERN, Next.js, TypeScript.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen site-bg">
        <Header />
        <div className="w-full px-6 pt-20 sm:pt-0 pb-10">
          <main className="fade-in">
            <AnimatedLayout>{children}</AnimatedLayout>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
