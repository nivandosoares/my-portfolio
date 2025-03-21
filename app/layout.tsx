import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nivando Soares portfolio',
  description: 'Personal portfolio of Nivando Soares',
  generator: 'Nivando Soares',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
