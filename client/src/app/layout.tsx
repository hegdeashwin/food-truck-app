// import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Food Truck App',
  description: 'Food Trick App',
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
