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
          <h3 className={`text-3xl xl:text-5xl font-bold text-center hexo-first-letter`}>
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
      <div className="mt-24 -mx-8 xl:mx-0">
        <img src="/images/banner/hero.svg" />
      </div>
    </div>
  )
}
