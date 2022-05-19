import Image from 'next/image'
import { ReactNode } from 'react'

interface BannerProps {
  children: ReactNode
}

export const Banner = ({ children }: BannerProps) => {
  return (
    <section className="relative z-0 flex h-200 bg-no-repeat" style={{ maxHeight: 'calc(100vh - 104px)' }}>
      <div className="absolute top-0 left-0 z-10 block h-full w-full">
        <Image src={'/images/banner/eth_shanghai.gif'} layout="fill" objectFit="cover" alt={'TODO'} />
      </div>
      <div className="absolute top-0 left-0 z-0 block h-full w-full">
        <img
          srcSet={
            '/images/banner/eth_shanghai.png 1x, /images/banner/eth_shanghai@2x.png 2x, /images/banner/eth_shanghai@3x.png 3x,'
          }
          alt={'banner'}
          className="h-full object-cover"
        />
      </div>
      <div className="container z-20 m-auto">
        <div className="absolute bottom-10 left-0 flex w-full items-end justify-center">
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}
