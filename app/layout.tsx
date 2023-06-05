import './globals.css'

export const metadata = {
  title: 'Trello Clone',
  description: 'Organize your to-do list with AI',
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
