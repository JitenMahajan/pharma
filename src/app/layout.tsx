import type { Metadata } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pharma Manager',
  description: 'Your one-stop solution for pharmacy management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}