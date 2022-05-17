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
        <div className="flex justify-center text-white w-1/2">
          <h3 className={`inline-flex text-5xl font-bold text-center`}>#BUIDL THE FUTURE OF WEB3 SOCIAL</h3>
        </div>
      </div>
      <div className="mt-12 px-16">
        <div>
          <p className="text-center">
            Join us for the ETH Shanghai hackathon. BUIDL the next generation of Web3 social application alongside with
            developers, creators, artists, and entrepreneur all over the world. Click here to read our proposal.
          </p>
        </div>
      </div>
      <div className="mt-24">
        <img src="/images/banner/hero.svg"/>
      </div>
    </div>
  )
}
