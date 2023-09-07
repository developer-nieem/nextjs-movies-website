
import Header from '@/components/Header'
import './globals.css'
import { Inter, Mulish } from 'next/font/google'
import Footer from '@/components/Footer'
import AuthProvider from '@/provider/Authprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies',
  description: 'movies app',
}

const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body className={inter.className}>     
        <AuthProvider>
        <Header></Header>
        {children}
        
        <Footer></Footer>
        </AuthProvider>
        </body>
    </html>
  )
}
