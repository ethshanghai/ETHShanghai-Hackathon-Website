import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'

const sponsorsConfig = [
  {
    name: 'ChainIDE',
    image: '/images/sponsors/chain_ide.svg',
  },
]

const trackConfig = [
  {
    name: 'CONSENSYS',
    image: '/images/sponsors/consensys.svg',
  },
  {
    name: 'HASH GLOBAL',
    image: '/images/sponsors/hashglobal.svg',
  },
  {
    name: 'INFURA',
    image: '/images/sponsors/infura.svg',
  },
  {
    name: 'Mask Network',
    image: '/images/sponsors/mask.svg',
  },
  {
    name: 'Arweave',
    image: '/images/sponsors/arweave.svg',
  },
  {
    name: 'NEAR',
    image: '/images/sponsors/near.svg',
  },
  {
    name: 'Polygon',
    image: '/images/sponsors/polygon.svg',
  },
  {
    name: 'Project Calaxy',
    image: '/images/sponsors/project_calaxy.svg',
  },
  {
    name: 'Moonbeam',
    image: '/images/sponsors/moonbeam.svg',
  },
  {
    name: 'The Graph',
    image: '/images/sponsors/the_graph.svg',
  },
  {
    name: 'Next ID',
    image: '/images/sponsors/next_id.svg',
  },
  {
    name: 'RSS3',
    image: '/images/sponsors/rss3.svg',
  },
  {
    name: 'meson',
    image: '/images/sponsors/meson.svg',
  },
  {
    name: 'KNN3',
    image: '/images/sponsors/knn3.svg',
  },
  {
    name: 'ceramic',
    image: '/images/sponsors/ceramic.svg',
  },
  {
    name: 'xmtp labs',
    image: '/images/sponsors/xmtp_labs.svg',
  },
  {
    name: 'Cyber Connect',
    image: '/images/sponsors/cyberconnect.svg',
  },
  {
    name: 'ETH Sign',
    image: '/images/sponsors/eth_sign.svg',
  },
  {
    name: 'kwil',
    image: '/images/sponsors/kwil.svg',
  },
  {
    name: 'collab_land',
    image: '/images/sponsors/collab_land.svg',
  },
  {
    name: 'lit_protocol',
    image: '/images/sponsors/lit_protocol.svg',
  },
]

const communitySupport = [
  {
    name: 'NFTScan',
    image: '/images/community-support/nftscan.svg',
  },
  {
    name: 'D/C',
    image: '/images/community-support/dc.svg',
  },
  {
    name: 'MetaJam',
    image: '/images/community-support/meta_jam.svg',
  },
  {
    name: 'Scroll',
    image: '/images/community-support/scroll.svg',
  },
]

export const Sponsors = () => {
  const { t } = useTranslation('common')

  return (
    <div className="text-white">
      <div className="mb-20">
        <HeaderSection content={t('sponsors')} />
      </div>
      <div>
        <h4 className="inline-flex border-b-6 border-nav text-4xl font-bold leading-6">{t('sponsors_presenting')}</h4>
        <div className="mt-16 grid grid-cols-4 grid-rows-1 gap-7">
          {sponsorsConfig.map(x => (
            <Card name={x.name} image={x.image} key={x.name} backgroundClass={'partner'} width={320} height={339} />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h4 className="inline-flex border-b-6 border-nav text-4xl font-bold leading-6">{t('sponsors_track')}</h4>
        <div className="mt-16 grid grid-cols-5 grid-rows-4 gap-7">
          {trackConfig.map(x => (
            <img src={x.image} alt={x.name} />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h4 className="inline-flex border-b-6 border-nav text-4xl font-bold leading-6">{t('community_support')}</h4>
        <div className="mt-16 grid grid-cols-5 grid-rows-1 gap-7">
          {communitySupport.map(x => (
            <img src={x.image} alt={x.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
