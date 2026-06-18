import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnRadar — Poach Your Competitor\'s Unhappy Customers',
  description: 'ChurnRadar monitors competitor reviews in real-time and tells you exactly which customers are ready to switch — so your sales team can close them first.',
  keywords: 'competitor intelligence, churn monitoring, B2B sales, competitive analysis',
  openGraph: {
    title: 'ChurnRadar',
    description: 'Turn your competitor\'s unhappy customers into your next deal.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
