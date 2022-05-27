import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'

const speakerMasters = (t: any) => [
  {
    name: 'Mia Deng',
    description: 'Partner@Dragonfly Capital',
    image: '/images/judges/mia_deng.jpg 1x, /images/judges/mia_deng@2x.jpg 2x, /images/judges/mia_deng@3x.jpg 3x',
  },
  {
    name: 'GM',
    description: 'Investor@Dragonfly Capital',
    image: '/images/judges/gm.jpg 1x, /images/judges/gm@2x.jpg 2x, /images/judges/gm@3x.jpg 3x',
  },
  {
    name: 'Bob Jiang',
    description: 'Steward@Gitcoin',
    image: '/images/judges/bob_jiang.jpg 1x, /images/judges/bob_jiang@2x.jpg 2x, /images/judges/bob_jiang@3x.jpg 3x',
  },
  {
    name: 'Samantha Bohbot',
    description: 'Director@Digital Currency Group',
    image:
      '/images/judges/samantha_bohbot.jpg 1x, /images/judges/samantha_bohbot@2x.jpg 2x, /images/judges/samantha_bohbot@3x.jpg 3x',
  },
  {
    name: 'James Shen',
    description: 'Founder@Hash Global',
    image: '/images/judges/james_shen.jpg 1x, /images/judges/james_shen@2x.jpg 2x, /images/judges/james_shen@3x.jpg 3x',
  },
  {
    name: 'Robert Yan',
    description: 'Tech lead@NEAR',
    image: '/images/judges/robert_yan.jpg 1x, /images/judges/robert_yan@2x.jpg 2x, /images/judges/robert_yan@3x.jpg 3x',
  },
  {
    name: 'Henry',
    description: 'Developer Relations @Moonbeam',
    image: '/images/judges/henry_1.jpg 1x, /images/judges/henry_1@2x.jpg 2x, /images/judges/henry_1@3x.jpg 3x',
  },
  {
    name: 'Yuki Pan',
    description: 'Moonbeam Marketing@Moonbeam',
    image: '/images/judges/yuki_pan.jpg 1x, /images/judges/yuki_pan@2x.jpg 2x, /images/judges/yuki_pan@3x.jpg 3x',
  },
  {
    name: 'Siraj Raval',
    description: 'Developer Education@Polygon',
    image:
      '/images/judges/siraj_raval.jpg 1x, /images/judges/siraj_raval@2x.jpg 2x, /images/judges/siraj_raval@3x.jpg 3x',
  },
  {
    name: 'Sandipan Kundu',
    description: 'Developer Relations@Polygon',
    image:
      '/images/judges/sandipan_kundu.jpg 1x, /images/judges/sandipan_kundu@2x.jpg 2x, /images/judges/sandipan_kundu@3x.jpg 3x',
  },
  {
    name: 'Dalip Tyagi',
    description: 'SVP and Head of Developer Relations@Polygon',
    image:
      '/images/judges/dalip_tyagi.jpg 1x, /images/judges/dalip_tyagi@2x.jpg 2x, /images/judges/dalip_tyagi@3x.jpg 3x',
  },
  {
    name: 'Matthew Davis',
    description: 'Developer Advocate@Ceramic',
    image:
      '/images/judges/matthew_davis.jpg 1x, /images/judges/matthew_davis@2x.jpg 2x, /images/judges/matthew_davis@3x.jpg 3x',
  },
  {
    name: 'Rohan Dasika',
    description: 'Partner Engineer@Ceramic',
    image:
      '/images/judges/rohan_dasika.jpg 1x, /images/judges/rohan_dasika@2x.jpg 2x, /images/judges/rohan_dasika@3x.jpg 3x',
  },
  {
    name: 'Chris Anatalio',
    description: 'Platform Advocate@ConsenSys',
    image:
      '/images/judges/chris_anatalio.jpg 1x, /images/judges/chris_anatalio@2x.jpg 2x, /images/judges/chris_anatalio@3x.jpg 3x',
  },
  {
    name: 'Emily Lin',
    description: 'Developer Evangelist@ConsenSys',
    image: '/images/judges/emily_lin.jpg 1x, /images/judges/emily_lin@2x.jpg 2x, /images/judges/emily_lin@3x.jpg 3x',
  },
  {
    name: 'Bruce Wang',
    description: 'Developer Evangelist@CyberConnect',
    image: '/images/judges/bruce_wang.jpg 1x, /images/judges/bruce_wang@2x.jpg 2x, /images/judges/bruce_wang@3x.jpg 3x',
  },
  {
    name: 'Brennan Lamey',
    description: 'Founder@Kwil',
    image:
      '/images/judges/brennan_lamey.jpg 1x, /images/judges/brennan_lamey@2x.jpg 2x, /images/judges/brennan_lamey@3x.jpg 3x',
  },
  {
    name: 'Luis Gruson',
    description: 'Growth Strategy@Kwil',
    image:
      '/images/judges/luis_gruson.jpg 1x, /images/judges/luis_gruson@2x.jpg 2x, /images/judges/luis_gruson@3x.jpg 3x',
  },
  {
    name: 'Errance Liu',
    description: 'Partner@Knn3',
    image:
      '/images/judges/errance_liu.jpg 1x, /images/judges/errance_liu@2x.jpg 2x, /images/judges/errance_liu@3x.jpg 3x',
  },
  {
    name: 'Wenqing Yu',
    description: 'Co-Founder@Knn3',
    image: '/images/judges/wenqing_yu.jpg 1x, /images/judges/wenqing_yu@2x.jpg 2x, /images/judges/wenqing_yu@3x.jpg 3x',
  },
  {
    name: 'Leo',
    description: 'Co-Founder@Meson Network',
    image: '/images/judges/leo.jpg 1x, /images/judges/leo@2x.jpg 2x, /images/judges/leo@3x.jpg 3x',
  },
  {
    name: 'Wu Xiao',
    description: 'CEO of White Matrix &Founder of ChainlDE',
    image: '/images/judges/wu_xiao.jpg 1x, /images/judges/wu_xiao@2x.jpg 2x, /images/judges/wu_xiao@3x.jpg 3x',
  },
  {
    name: 'Bo',
    description: '@ChainIDE',
    image: '/images/judges/bo.jpg 1x, /images/judges/bo@2x.jpg 2x, /images/judges/bo@3x.jpg 3x',
  },
  {
    name: 'Bidhan Roy',
    description: 'Ecosystem lead@Arweave',
    image: '/images/judges/bidhan_roy.jpg 1x, /images/judges/bidhan_roy@2x.jpg 2x, /images/judges/bidhan_roy@3x.jpg 3x',
  },
  {
    name: 'Chris Cassano',
    description: 'Co-Founder and CTO@Lit Protocol',
    image:
      '/images/judges/chris_cassano.jpg 1x, /images/judges/chris_cassano@2x.jpg 2x, /images/judges/chris_cassano@3x.jpg 3x',
  },
  {
    name: 'David Sneider',
    description: 'Co-Founder',
    image:
      '/images/judges/david_sneider.jpg 1x, /images/judges/david_sneider@2x.jpg 2x, /images/judges/david_sneider@3x.jpg 3x',
  },
  {
    name: 'Harry',
    description: 'Co-Founder & Project Lead@Project Galaxy',
    image: '/images/judges/harry.jpg 1x, /images/judges/harry@2x.jpg 2x, /images/judges/harry@3x.jpg 3x',
  },
  {
    name: 'Juee',
    description: 'Client Relations Manager@Project Galaxy',
    image: '/images/judges/juee.jpg 1x, /images/judges/juee@2x.jpg 2x, /images/judges/juee@3x.jpg 3x',
  },
  {
    name: 'Peter Denton',
    description: 'Head of Growth@XMTP',
    image:
      '/images/judges/peter_denton.jpg 1x, /images/judges/peter_denton@2x.jpg 2x, /images/judges/peter_denton@3x.jpg 3x',
  },
  {
    name: 'Henry',
    description: 'Senior Eng@RSS3',
    image: '/images/judges/henry.jpg 1x, /images/judges/henry@2x.jpg 2x, /images/judges/henry@3x.jpg 3x',
  },
  {
    name: 'Usagi',
    description: 'Co-founder@RSS3',
    image: '/images/judges/usagi.jpg 1x, /images/judges/usagi@2x.jpg 2x, /images/judges/usagi@3x.jpg 3x',
  },
  {
    name: 'Yisi Liu',
    description: 'CTO@Mask Network',
    image: '/images/judges/yisi_liu.jpg 1x, /images/judges/yisi_liu@2x.jpg 2x, /images/judges/yisi_liu@3x.jpg 3x',
  },
  {
    name: 'Jerry Zhang',
    description: '@The Graph',
    image: '/images/judges/default.jpg 1x, /images/judges/default@2x.jpg 2x, /images/judges/default@3x.jpg 3x',
  },
  {
    name: 'Anthony',
    description: '@Streamingfast',
    image: '/images/judges/anthony.jpg 1x, /images/judges/anthony@2x.jpg 2x, /images/judges/anthony@3x.jpg 3x',
  },
  {
    name: 'Alen Zhang',
    description: 'Founder@y2z Ventures',
    image: '/images/judges/alen_zhang.jpg 1x, /images/judges/alen_zhang@2x.jpg 2x, /images/judges/alen_zhang@3x.jpg 3x',
  },
  {
    name: 'Taylor Zhang',
    description: 'Head of Ecosystem@Mask Network',
    image:
      '/images/judges/taylor_zhang.jpg 1x, /images/judges/taylor_zhang@2x.jpg 2x, /images/judges/taylor_zhang@3x.jpg 3x',
  },
  {
    name: 'Binrui Guan',
    description: 'Developer Lead@Mask Network',
    image:
      '/images/judges/binrui_guan.jpg 1x, /images/judges/binrui_guan@2x.jpg 2x, /images/judges/binrui_guan@3x.jpg 3x',
  },
  {
    name: 'Nyk Ma',
    description: 'Developer Lead@Next.ID',
    image: '/images/judges/nyk_ma.jpg 1x, /images/judges/nyk_ma@2x.jpg 2x, /images/judges/nyk_ma@3x.jpg 3x',
  },
  {
    name: 'Hannah Shen',
    description: 'Growth Lead@Next.ID',
    image:
      '/images/judges/hannah_shen.jpg 1x, /images/judges/hannah_shen@2x.jpg 2x, /images/judges/hannah_shen@3x.jpg 3x',
  },
]

export const Judges = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="m-auto mb-8 flex justify-center">
        <HeaderSection content={'Judges'} />
      </div>
      <div className="m-auto flex justify-center py-12">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 xl:grid-cols-4 xl:grid-rows-1 xl:gap-9">
          {speakerMasters(t).map((x, index) => (
            <HumanCard
              name={x.name}
              description={x.description}
              image={x.image}
              key={index}
              backgroundClass={'bg-speaker-master'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
