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
      <body className='bg-[#f5F6F8]'>{children}</body>
    </html>
  )
}
