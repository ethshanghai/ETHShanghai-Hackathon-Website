import Image from 'next/image'
import { ReactNode } from 'react'

interface BannerProps {
  children: ReactNode
}

export const Banner = ({ children }: BannerProps) => {
  return (
    <section className="relative z-0 flex h-200 bg-no-repeat">
      <div className="absolute top-0 left-0 z-10 block h-full w-full">
        <Image src={'/images/banner/eth_shanghai.gif'} layout="fill" objectFit="cover" alt={'TODO'} />
      </div>
      <div className="container z-20 m-auto">
        <div className="flex items-end justify-center absolute bottom-10 left-0 w-full">
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}
