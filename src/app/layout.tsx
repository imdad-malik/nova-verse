export const metadata = {
  title: "TechNovaVista",
  description: "SEO Insights from Imdad Malik",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
