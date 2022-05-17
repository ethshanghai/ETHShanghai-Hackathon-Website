import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'
import { InfoCard } from './InfoCard'

export const AboutUs = () => {
  const { t } = useTranslation('common')

  return (
    <div id={"about-us"}>
      <div className="mb-20">
        <HeaderSection direction="reverse" content={t('about_us')} />
      </div>
      <div className="text-white flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-3">
          <h5 className="font-bold text-2xl">About ETH Shanghai</h5>
          <p className="text-lg">
            In the early days of Ethereum, Vitalik came to Shanghai to promote his project and got generous support.
            Shanghai partially flourished in Ethereum's growth. The Ethereum Foundation named the most essential upgrade
            ETH Shanghai to recognize this connection. ETH Shanghai marks the final upgrade before the merge of ETH 2.0,
            which is committed to promoting Ethereum network and encouraging more developers to join the Web3 community.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h5 className="font-bold text-2xl">Mission & Why Hack with us</h5>
          <p className="text-lg">
            Sponsored and supported by Ethereum Foundation, ETH Shanghai marks the final upgrade before the merge of ETH
            2.0. We are committed to promoting Ethereum network and encouraging more developers to join the Web3
            community, and making Shanghai one of the Web3 innovation hubs.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h5 className="font-bold text-2xl">Build Social Applications in Web3</h5>
          <p className="text-lg">
            At ETH Shanghai hackathon, we want to open developers' imaginations to define what Web3 social could be. By
            gathering the leaders of Web3 protocols, we offer you resources and SDE tools. You can make the social space
            more open and censorship-resistant and create an ownership structure aligned with business interests.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <h5 className="font-bold text-2xl">Project Examples</h5>
          <p className="text-lg">
            Below are some examples of projects that might be relevant. Feel free to use these as inspiration for yours
            or chart your own course!
          </p>
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
