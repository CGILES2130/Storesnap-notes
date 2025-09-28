export const metadata = {
  title: "StoreSnap Notes",
  description: "Fast, structured store visit notes — with photos and one-tap email",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">{children}</body>
    </html>
  );
}
