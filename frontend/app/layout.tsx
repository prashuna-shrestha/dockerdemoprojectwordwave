import './globals.css'
import Navbar from '../components/Navbar'
import type { Metadata } from 'next'
import { AuthProvider } from '../context/AuthContext'

export const metadata: Metadata = {
  title: 'Your Site',
  description: 'Description here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}