import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'

const sponsorsConfig = [
  {
    name: 'ChainIDE',
    image: '/images/sponsors/chain_ide.svg',
    link: 'https://chainide.com/',
  },
]

const trackConfig = [
  {
    name: 'consensys',
    image: '/images/sponsors/consensys.svg',
    link: 'https://consensys.net/',
  },
  {
    name: 'HASH GLOBAL',
    image: '/images/sponsors/hashglobal.svg',
    link: 'https://twitter.com/hashglobal',
  },
  {
    name: 'INFURA',
    image: '/images/sponsors/infura.svg',
    link: 'https://infura.io/',
  },
  {
    name: 'Mask Network',
    image: '/images/sponsors/mask.svg',
    link: 'https://mask.io/',
  },
  {
    name: 'Arweave',
    image: '/images/sponsors/arweave.svg',
    link: 'https://www.arweave.org/',
  },
  {
    name: 'NEAR',
    image: '/images/sponsors/near.svg',
    link: 'https://near.org/',
  },
  {
    name: 'Polygon',
    image: '/images/sponsors/polygon.svg',
    link: 'https://polygon.technology/',
  },
  {
    name: 'Project Calaxy',
    image: '/images/sponsors/project_calaxy.svg',
    link: 'https://galaxy.eco/',
  },
  {
    name: 'Moonbeam',
    image: '/images/sponsors/moonbeam.svg',
    link: 'https://moonbeam.network/',
  },
  {
    name: 'The Graph',
    image: '/images/sponsors/the_graph.svg',
    link: 'https://thegraph.com/',
  },
  {
    name: 'Next ID',
    image: '/images/sponsors/next_id.svg',
    link: 'https://next.id',
  },
  {
    name: 'RSS3',
    image: '/images/sponsors/rss3.svg',
    link: 'https://rss3.io/',
  },
  {
    name: 'meson',
    image: '/images/sponsors/meson.svg',
    link: 'https://meson.network/',
  },
  {
    name: 'KNN3',
    image: '/images/sponsors/knn3.svg',
    link: 'https://www.knn3.xyz/',
  },
  {
    name: 'ceramic',
    image: '/images/sponsors/ceramic.svg',
    link: 'https://ceramic.network/',
  },
  {
    name: 'xmtp labs',
    image: '/images/sponsors/xmtp_labs.svg',
    link: 'https://xmtp.com/',
  },
  {
    name: 'Cyber Connect',
    image: '/images/sponsors/cyberconnect.svg',
    link: 'https://cyberconnect.me/',
  },
  {
    name: 'ETH Sign',
    image: '/images/sponsors/eth_sign.svg',
    link: 'https://www.ethsign.xyz/',
  },
  {
    name: 'kwil',
    image: '/images/sponsors/kwil.svg',
    link: 'https://kwil.com/',
  },
  {
    name: 'collab_land',
    image: '/images/sponsors/collab_land.svg',
    link: 'https://collab.land/',
  },
  {
    name: 'lit_protocol',
    image: '/images/sponsors/lit_protocol.svg',
    link: 'https://litprotocol.com/',
  },
  {
    name: 'omniverse',
    image: '/images/sponsors/omniverse.svg',
    link: '#',
  },
]

const communitySupport = [
  {
    name: 'NFTScan',
    image: '/images/community-support/nftscan.svg',
    link: 'https://www.nftscan.com/',
  },
  {
    name: 'D/C',
    image:
      '/images/community-support/decode.png 1x, /images/community-support/decode@2x.png 2x, /images/community-support/decode@3x.png 3x',
    link: 'ttps://www.decode.build/',
  },
  {
    name: 'MetaJam',
    image:
      '/images/community-support/meta_jam.png 1x, /images/community-support/meta_jam@2x.png 2x, /images/community-support/meta_jam@3x.png 3x',
    link: 'https://www.metajam.studio/',
  },
  {
    name: 'Scroll',
    image: '/images/community-support/scroll.svg',
    link: 'https://scroll.io/',
  },
]

export const Sponsors = () => {
  const { t } = useTranslation('common')

  return (
    <div className="text-white">
      <div className="mb-16">
        <HeaderSection content={t('sponsors')} direction="reverse" />
      </div>
      <div>
        <h4 className="inline-flex border-b-6 border-nav text-2xl font-bold leading-6 xl:text-4xl">
          {t('sponsors_presenting')}
        </h4>
        <div className="mt-12 grid grid-cols-3 grid-rows-1 gap-3 xl:grid-cols-4 xl:gap-7">
          {sponsorsConfig.map((x) => (
            <a key={x.image} target="_blank" className="inline-flex" href={x.link}>
              {x.image.includes('.svg') ? <img src={x.image} alt={x.name} /> : <img srcSet={x.image} alt={x.name} />}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h4 className="inline-flex border-b-6 border-nav text-2xl font-bold leading-6 xl:text-4xl">
          {t('sponsors_track')}
        </h4>
        <div className="grid-rows-8 mt-12 grid grid-cols-3 gap-3 xl:grid-cols-5 xl:grid-rows-5 xl:gap-7">
          {trackConfig.map((x) => (
            <a key={x.image} target="_blank" className="inline-flex" href={x.link}>
              {x.image.includes('.svg') ? <img src={x.image} alt={x.name} /> : <img srcSet={x.image} alt={x.name} />}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h4 className="inline-flex border-b-6 border-nav text-2xl font-bold leading-6 xl:text-4xl">
          {t('community_support')}
        </h4>
        <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-3 xl:grid-cols-5 xl:grid-rows-1 xl:gap-7">
          {communitySupport.map((x) => (
            <a key={x.image} target="_blank" className="inline-flex" href={x.link}>
              {x.image.includes('.svg') ? <img src={x.image} alt={x.name} /> : <img srcSet={x.image} alt={x.name} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
