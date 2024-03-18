import type { Metadata } from "next"
import { Nunito } from "next/font/google"
// add ClerkProvider
import { ClerkProvider } from "@clerk/nextjs"

import "./globals.css"

const font = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Lingomaster | Duolingo Clone",
    description: "A Duolingo clone built with Next.js and Tailwind CSS",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={font.className} suppressHydrationWarning={true}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
