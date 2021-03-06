import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'

const sponsorsConfig = [
  {
    name: 'Mask Network',
    image: '/images/sponsors/mask.svg',
    link: 'https://mask.io/',
  },
  {
    name: 'Next ID',
    image: '/images/sponsors/next_id.svg',
    link: 'https://next.id',
  },
  {
    name: 'ChainIDE',
    image: '/images/sponsors/chain_ide.svg',
    link: 'https://chainide.com/',
  },
]

const trackConfig = [
  {
    name: 'ETH',
    image: '/images/sponsors/eth.png 1x, /images/sponsors/eth@2x.png 2x, /images/sponsors/eth@3x.png 3x',
    link: 'https://ethereum.org/en/',
  },
  {
    name: 'HASH GLOBAL',
    image:
      '/images/sponsors/hashglobal.png 1x, /images/sponsors/hashglobal@2x.png 2x, /images/sponsors/hashglobal@3x.png 3x',
    link: 'https://twitter.com/hashglobal',
  },
  {
    name: 'bonfire union',
    image: '/images/sponsors/bonfire_union.svg',
    link: 'https://mask.io/',
  },
  {
    name: 'y2z ventures',
    image: '/images/sponsors/y2z_ventures.svg',
    link: 'https://y2z.io',
  },
  {
    name: 'omniverse',
    image: '/images/sponsors/omniverse.svg',
    link: 'https://omniverse.capital',
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
    image:
      '/images/sponsors/the_graph.png 1x, /images/sponsors/the_graph@2x.png 2x, /images/sponsors/the_graph@3x.png 3x',
    link: 'https://thegraph.com/',
  },
  {
    name: 'RSS3',
    image: '/images/sponsors/rss3.svg',
    link: 'https://rss3.io/',
  },
  {
    name: 'meson',
    image: '/images/sponsors/meson.png 1x, /images/sponsors/meson@2x.png 2x, /images/sponsors/meson@3x.png 3x',
    link: 'https://meson.network/',
  },
  {
    name: 'KNN3',
    image: '/images/sponsors/knn3.svg',
    link: 'https://www.knn3.xyz/',
  },
  {
    name: 'ceramic',
    image: '/images/sponsors/ceramic.png 1x, /images/sponsors/ceramic@2x.png 2x, /images/sponsors/ceramic@3x.png 3x',
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
    name: 'INFURA',
    image: '/images/sponsors/infura.svg',
    link: 'https://infura.io/',
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
    name: 'consensys',
    image: '/images/sponsors/consensys.svg',
    link: 'https://consensys.net/',
  },
  {
    name: 'collab_land',
    image:
      '/images/sponsors/collab_land.png 1x, /images/sponsors/collab_land@2x.png 2x, /images/sponsors/collab_land@3x.png 3x',
    link: 'https://collab.land/',
  },
  {
    name: 'lit_protocol',
    image:
      '/images/sponsors/lit_protocol.png 1x, /images/sponsors/lit_protocol@2x.png 2x, /images/sponsors/lit_protocol@3x.png 3x',
    link: 'https://litprotocol.com/',
  },
  {
    name: 'rct ai',
    image: '/images/sponsors/rct.png 1x, /images/sponsors/rct@2x.png 2x, /images/sponsors/rct@3x.png 3x',
    link: 'https://rct.ai',
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
    image:
      '/images/community-support/scroll.png 1x, /images/community-support/scroll@2x.png 2x, /images/community-support/scroll@3x.png 3x',
    link: 'https://scroll.io/',
  },
  {
    name: 'ETHPlanet',
    image: '/images/community-support/ethplanet.svg',
    link: 'https://www.ethplanet.org/',
  },
  {
    name: '????????????',
    image: '/images/community-support/yuanyu.svg',
    link: 'https://www.primitiveslane.org/',
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
        <div className="mt-12 grid grid-cols-3 grid-rows-1 gap-3 xl:grid-cols-5 xl:gap-7">
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
            <a
              key={x.image}
              target="_blank"
              className="inline-flex h-16 justify-center rounded-lg bg-support md:h-28 lg:p-2 xl:h-32 xl:p-4"
              href={x.link}>
              {x.image.includes('.svg') ? <img src={x.image} alt={x.name} /> : <img srcSet={x.image} alt={x.name} />}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h4 className="inline-flex border-b-6 border-nav text-2xl font-bold leading-6 xl:text-4xl">
          {t('community_support')}
        </h4>
        <div className="mt-12 grid grid-cols-3 grid-rows-2 gap-3 xl:grid-cols-5 xl:grid-rows-2 xl:gap-7">
          {communitySupport.map((x) => (
            <a
              key={x.image}
              target="_blank"
              className="inline-flex h-16 justify-center rounded-lg bg-support p-2 md:h-28 md:p-4 xl:h-32 xl:p-6"
              href={x.link}>
              {x.image.includes('.svg') ? <img src={x.image} alt={x.name} /> : <img srcSet={x.image} alt={x.name} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
