// import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'

// const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Astro Ecommerce',
  description: 'Shamsudeen Task',
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body>
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
