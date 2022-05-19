import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'

const coHost = [
  {
    name: 'Gitcoin',
    image: '/images/co-hosts/gitcoin.svg',
    link: 'https://gitcoin.co/',
  },
]

export const CoHost = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="mb-20">
        <HeaderSection content={t('co_hosts')} />
      </div>
      <div className="mt-16 grid grid-cols-1 grid-rows-1 grid-rows-1 gap-3 md:grid-cols-3 xl:gap-7">
        <div className="hidden md:block"></div>
        {coHost.map((x) => (
          <Card link={x.link} name={x.name} image={x.image} key={x.name} backgroundClass={'partner'} />
        ))}
      </div>
    </div>
  )
}
