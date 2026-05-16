import type { Metadata, Viewport } from 'next';
import "./globals.css";
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Rachael & Josh Wedding',
    description: 'Wedding website for Rachael and Josh',
    openGraph: {
        title: "Rachael & Josh Wedding",
        description: "Join us for our special day!",
        url: "https://rachaelandjosh.co.uk",
        siteName: "Rachael & Josh Wedding",
        images: [
            {
                url: "https://rachaelandjosh.co.uk/images/preview.png",
                width: 1200,
                height: 630,
                alt: "Preview image",
            },
        ],
        type: "website",
    },
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div id="root">
                    <Suspense fallback={<div>loading</div>}>
                        {children}
                    </Suspense>
                </div>
            </body>
        </html>
    )
}