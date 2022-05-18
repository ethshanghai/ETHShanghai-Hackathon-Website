import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'

const prizesConfig = [
  {
    name: '$15000 Silver Prize',
    image: '/images/prizes/15000.svg',
  },
  {
    name: '$30000 Gold Prize',
    image: '/images/prizes/30000.svg',
  },
  {
    name: '$7500 Bronze Prize X2',
    image: '/images/prizes/7500.svg',
  },
  {
    name: '$5000 Best Prize Arweave ecosystem',
    image: '/images/prizes/5000_arweave_ecosystem.svg',
  },
  {
    name: '$10000 Best Prize On-chain data',
    image: '/images/prizes/10000.svg',
  },
  {
    name: '$5000 Best Prize Access Control',
    image: '/images/prizes/5000_access_control.svg',
  },
  {
    name: '$5000 Best Prize Web Page Modification',
    image: '/images/prizes/5000_web_page.svg',
  },
  {
    name: '$5000 Best Prize Social games',
    image: '/images/prizes/5000_social_game.svg',
  },
  {
    name: '$3000 Best Prize Communication (XMTP)',
    image: '/images/prizes/3000.svg',
  },
  {
    name: null,
    image: null,
  },
  {
    name: '$3000 Best Prize DID',
    image: '/images/prizes/3000_did.svg',
  },
  {
    name: null,
    image: null,
  },
]

export const Prizes = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="mb-24">
        <HeaderSection content={t('prizes')} />
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-2 xl:gap-4 prize">
        {prizesConfig.map((x) => (
          x.image ? <div key={x.name}><img src={x.image} alt={'TODO'} /></div> : <div></div>
        ))}
      </div>
    </div>
  )
}
