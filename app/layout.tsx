import '../styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'MLOps.md — Community',
  description: 'MLOps.md — community for MLOps practitioners'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-white min-h-screen antialiased">
        <div className="min-h-screen bg-neural-pattern">
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
          <footer className="text-center py-8 text-sm opacity-70">© {new Date().getFullYear()} MLOps.md</footer>
        </div>
      </body>
    </html>
  )
}
