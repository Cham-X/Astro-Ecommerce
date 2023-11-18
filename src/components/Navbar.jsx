'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navbar() {

  const pathname = usePathname();

  console.log('router', pathname)


  const isRoute = pathname !== '/';

  return (
    <>
      {isRoute &&
        (<nav className="bg-dark flex sticky top-0 left-0 items-center justify-between py-4 border-b border-gray-400 px-10 ">
          <div>
            <Link href="/">
              <h3 className="info-text">Astro Ecommerce </h3>
            </Link>
          </div>
          <div className="flex gap-8">
            <Image
              src="/asset/Group-svg.svg"
              alt="nav-icon"
              width={20}
              height={20}
            />
            <Image
              src="/asset/love-svg.svg"
              alt="nav-icon"
              width={20}
              height={20}
            />
            <div className="flex">
              <Image
                src="/asset/euro-svg.svg"
                alt="nav-icon"
                width={20}
                height={20}
              />
              <Image
                src="/asset/dropdown-svg.svg"
                alt="nav-icon"
                width={20}
                height={20}
              />
            </div>
            <Image
              src="/asset/photo-1.png"
              alt="nav-icon"
              width={25}
              height={30}
              className="rounded-md"
            />
          </div>
        </nav>)
      }
    </>

  )
}
