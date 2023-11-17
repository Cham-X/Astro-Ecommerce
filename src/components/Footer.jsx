'use client'

import { usePathname } from "next/navigation"

export default function Footer() {

  const pathname = usePathname();

  const isRoute = pathname !== '/';

  return (
    <>{
      isRoute && (
        <footer className='bg-inherit font-NatoSans text-secondary text-[12px] px-10 py-4 flex items-start justify-between'>
          <p>Copyright &copy; 2023 Corporate UI Design System by Creative Tim.</p>
          <div className="flex items-center justify-center gap-4">
            <button>Creative Tim</button>
            <button>About Us</button>
            <button>Blog</button>
            <button>License</button>
          </div>
        </footer>
      )
    }

    </>

  )
}
