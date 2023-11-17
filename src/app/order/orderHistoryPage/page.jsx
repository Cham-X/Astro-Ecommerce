import HistoryTable from "@/components/HistoryTable"

const orders = [
  {
    id: 13423,
    placementDate: "April 3, 2024",
    amount:2570,
    items: [
      {
        id: 1,
        name: 'Premium Suit',
        price: 790,
        imageUrl: "/asset/graysuit.png",
        date: "Apr 6, 2022",
        isDelivered:true,
      },
      {
        id: 2,
        name: 'Linen Suit',
        price: 790,
        imageUrl: "/asset/blacksuit.png",
        date: "Apr 6, 2022",
        isDelivered:true,
      },
      {
        id: 1,
        name: 'Tweed Suit',
        price: 790,
        imageUrl: "/asset/brownsuit.png",
        date: "June 6, 2022",
        isDelivered:true,
      }
    ]
  },
  {
    id: 10962,
    placementDate: "June 3, 2024",
    amount: 2080,
    items: [
      {
        id: 1,
        name: 'Pink Suit',
        price: 790,
        imageUrl: "/asset/pinksuit.png",
        date: "Apr 5, 2022",
        isDelivered: true,
      },
      {
        id: 2,
        name: 'Premium Suit',
        price: 790,
        imageUrl: "/asset/blacksuit.png",
        date: "Apr 7, 2022",
        isDelivered: true,
      },
    ]
  }
]

export default function page() {
  return (
    <section className='px-10 py-4'>
      <div className="display-flex-col">
        <h2 className='font-NatoSans font-[600] leading-10 text-3xl text-dark'>Order history</h2>
        <p className='p-text'>See your recent orders, download your invoices.</p>
      </div>
      <div className='flex flex-col p-text gap-4'>
            <HistoryTable
              orders={orders}
            />
          
      </div>
    </section>
  )
}
