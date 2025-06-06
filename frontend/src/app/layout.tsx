import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hogwarts Houses',
  description: 'Explore the four houses of Hogwarts School of Witchcraft and Wizardry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Verdana, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
