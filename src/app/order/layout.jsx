import OrderPageNavbar from "@/components/OrderPageNavbar"

export default function RootLayout({ children }) {
    return (
  
            <>
                <main>
                <OrderPageNavbar/>
                    {children}
                </main>
            </>
   
  )
}
