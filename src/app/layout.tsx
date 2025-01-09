import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Bingo",
    description: "My Bingo card for 2025",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased vsc-initialized">{children}</body>
        </html>
    );
}
