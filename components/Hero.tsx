import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'

export const Hero = () => {
  const { t } = useTranslation('common')

  return (
    <div className="text-white">
      <div className="flex justify-center">
        <div className="flex justify-start text-white">
          <h3 className={`hexo-first-letter text-center text-3xl font-bold xl:text-5xl`}>
            BUIDL THE FUTURE OF WEB3 SOCIAL
          </h3>
        </div>
      </div>
      <div className="mt-12 xl:px-16">
        <div>
          <p className="text-left">
            Join us for the ETH Shanghai hackathon. BUIDL the next generation of Web3 social application alongside with
            developers, creators, artists, and entrepreneur all over the world. Click here to read our proposal.
          </p>
        </div>
      </div>
      <div className="-mx-8 mt-24 xl:mx-0">
        <img srcSet="/images/banner/hero.png 1x, /images/banner/hero@2x.png 2x, /images/banner/hero@3x.png 3x" />
      </div>
    </div>
  )
}
