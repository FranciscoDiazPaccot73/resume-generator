import './globals.scss';

export const metadata = {
  title: 'Free Resume Generator',
  description: 'Free resume generator.',
}

export default function RootLayout({children}) {
  return (
    <html>
      <head />
      <body className='overflow-x-hidden'>{children}</body>
    </html>
  );
}