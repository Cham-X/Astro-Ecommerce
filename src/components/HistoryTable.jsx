import Image from 'next/image'
import React from 'react'

const HistoryTable = ({ orders }) => {

    
    return (
        <section>
            {
                orders.map((order) =>
                    <div key={order.id} className='box bg-white mt-4'>
                        <div className="flex items-start justify-between py-3 px-8">
                            <div className='flex items-start justify-between gap-10'>
                                <div className="flex flex-col">
                                    <p className='p-text'>Order Id</p>
                                    <p className='info-text-black'>{order.id}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className='p-text'>Date of placement</p>
                                    <p className='info-text-black'>{order.placementDate}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className='p-text'>Amount</p>
                                    <p className='info-text-black'>{order.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                </div>
                            </div>
                            <div>
                                <button className='bg-dark px-4 py-2 font-NotoSans font-[600] text-[16px] text-white-100 rounded-md'>View invoice</button>
                            </div>
                        </div>
                        <div className="">
                            <table className="min-w-full">
                                <thead className='border-t border-gray-400'>
                                    <tr>
                                        <th className="py-4 px-8 text-left">Product</th>
                                        <th className="py-4 px-4 text-left">Amount</th>
                                        <th className="py-4 px-4 text-left">Status</th>
                                        <th className="py-4 px-4 text-left">Date</th>
                                        <th className="py-4 px-4 text-left">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map(order => (
                                        <tr key={order.id} className='border-t border-gray-400'>
                                            <td className="py-4 ">
                                                <Image
                                                    src={order.imageUrl}
                                                    alt={order.name}
                                                    width={100}
                                                    height={100}
                                                    className='inline-block object-contain h-[100px] w-[100px] pr-4'
                                                />
                                                <span className="info-text-black inline-block"> {order.name}</span>
                                            </td>
                                            <td className="py-4 px-4">{order.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                            <td className="py-4 px-4">
                                                {order.isDelivered ?
                                                    <button className='text-[#67C23A] py-1 px-2 bg-[#F0F9EB] rounded-md border border-[#C2E7B0] flex items-center justify-center gap-2'>
                                                        <Image
                                                            src="/asset/ticked.svg"
                                                            alt='ticked'
                                                            width={15}
                                                            height={15}
                                                        />
                                                        <span>
                                                            Delivered
                                                        </span>
                                                    </button> : <button>Not Delivered</button>}
                                            </td>
                                            <td className="py-4 px-4">{order.date}</td>
                                            <td className="py-4 px-4">
                                                <button className="info-text-black">
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                )
            }
        </section>
    )
}

export default HistoryTable
