import type { Metadata } from 'next';
import "./globals.css";
import { Suspense } from 'react';

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
                <div id="root">
                    <Suspense fallback={<div>loading</div>}>
                        {children}
                    </Suspense>
                </div>
            </body>
        </html>
    )
}