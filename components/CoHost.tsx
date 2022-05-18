import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'

const coHost = [
  {
    name: 'Gitcoin',
    image: '/images/co-hosts/gitcoin.svg',
  },
  {
    name: 'Ethereum Foundation',
    image: '/images/co-hosts/ethereum_foundation.svg',
  },
]

export const CoHost = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="mb-20">
        <HeaderSection content={t('co_hosts')} />
      </div>
      <div className="mt-16 grid grid-rows-2 lg:grid-cols-4 grid-cols-2 grid-rows-1 gap-3 xl:gap-7">
        <div className="hidden lg:block"></div>
        {coHost.map(x => (
          <Card name={x.name} image={x.image} key={x.name} backgroundClass={'partner'} />
        ))}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  )
}
