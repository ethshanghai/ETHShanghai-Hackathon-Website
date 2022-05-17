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

export const Sponsors = () => {
  const { t } = useTranslation('common')

  return (
    <div className="text-white">
      <div className="mb-20">
        <HeaderSection content={t('sponsors')} />
      </div>
      <div>
        <h4 className="inline-flex border-b-6 border-nav text-4xl font-bold leading-6">{t('sponsors_presenting')}</h4>
        <div className="mt-16 grid grid-cols-4 grid-rows-2 gap-7">
          {sponsorsConfig.map((x) => (
            <Card
              name={x.name}
              image={x.image}
              key={x.name}
              backgroundClass={'partner'}
              width={320}
              height={339}
            />
          ))}
          <div></div>
        </div>
      </div>
      <div>
        <h4 className="inline-flex border-b-6 border-nav text-4xl font-bold leading-6">{t('sponsors_track')}</h4>
        <div className="mt-16 grid grid-cols-4 grid-rows-2 gap-7">
          {sponsorsConfig.map((x) => (
            <Card
              name={x.name}
              image={x.image}
              key={x.name}
              backgroundClass={'partner'}
              width={320}
              height={339}
            />
          ))}
          <div></div>
        </div>
      </div>
    </div>
  )
}
