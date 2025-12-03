import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
    title: 'Rachael & Josh Wedding',
    description: 'Wedding website for Rachael and Josh',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}