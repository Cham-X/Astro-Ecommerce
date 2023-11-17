import Cart from "@/Sections/Cart";
import CustomerForm from "@/Sections/CustomerForm";

export default function Home() {
  return (
    <main className="flex min-w-full justify-center items-strech min-h-screen max-lg:flex-col-reverse">
      <section className="min-w-[60%] bg-gray-100 px-20 min-h-full py-20 ">
       <CustomerForm/>
     </section>
      <section className="min-w-[40%] min-h-screen bg-dark py-20 px-4">
        <Cart/>
     </section>
    </main>
  )
}
