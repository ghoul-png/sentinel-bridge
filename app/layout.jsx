export const metadata = {
  title: 'SENTINEL · Team 7',
  description: 'Interferometric Structural Intelligence — Team 7 Physics Project'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#080a0d', overflow: 'hidden' }}>{children}</body>
    </html>
  );
}
