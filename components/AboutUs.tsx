import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'
import { InfoCard } from './InfoCard'

export const AboutUs = () => {
  const { t } = useTranslation('common')

  return (
    <div id={'about-us'}>
      <div className="mb-20">
        <HeaderSection direction="reverse" content={t('about_us')} />
      </div>
      <div className="flex flex-col gap-y-8 text-white">
        <div className="flex flex-col gap-y-3">
          <h5 className="text-2xl font-bold">About ETH Shanghai</h5>
          <p className="text-lg">
            In the early days of Ethereum, Vitalik came to Shanghai to promote his project and received generous
            support. The Ethereum Foundation named the most essential upgrade ETH Shanghai to recognize this connection.
            ETH Shanghai is committed to promote the Ethereum network and attract developers to the Web3 community.
            Sponsored and supported by Ethereum Foundation, ETH Shanghai marks the final upgrade before the merge of ETH
            2.0. and aims to make Shanghai one of the Web3 innovation hubs.{' '}
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h5 className="text-2xl font-bold">Build Social Applications in Web3</h5>
          <p className="text-lg">
            At ETH Shanghai Hackathon, we want to open developers' imaginations to define what Web3 social could be with
            ample industry resources and SDE tools. You can make the social space more open and censorship-resistant and
            create an ownership structure aligned with the ethos of Web3.0.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h5 className="text-2xl font-bold">Project Examples</h5>
          <p className="text-lg">1. Build decentralized social applications and claim back data ownership.</p>
          <p className="text-lg">2. Establish a universal identity.</p>
          <p className="text-lg">3. Visualize your social graph.</p>
          <p className="text-lg">4. Create sustainable ways of storing user data.</p>
          <p className="text-lg">5. New Marketplace Model.</p>
          <p className="text-lg">6. Bridge Web2 and Web2 world through webpage plug-ins.</p>
          <p className="text-lg">7. Decentralized Identity (DID) solutions on chain.</p>
          <p className="text-lg">8. Onchain data and analytics API that allow users to build dashboards.</p>
        </div>
      </div>
    </div>
  )
}
