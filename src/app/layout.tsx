import type { Metadata } from "next";

import "./globals.css";

export const metadata = {
  title: "Abdallah Massri - Portfolio",
  description: "Junior Software Engineer | Java | React | DevOps | AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
