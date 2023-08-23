import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/../context/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taxi passengers',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <Provider >
        <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>{children}</body>

      </Provider>
    </html>
  )
}
