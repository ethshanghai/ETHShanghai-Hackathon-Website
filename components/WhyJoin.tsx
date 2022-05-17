import { HeaderSection } from './HeaderSection'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { HumanCard } from './HumanCard'
import { Card } from './Card'
import { InfoCard } from './InfoCard'

export const WhyJoin = () => {
  const { t } = useTranslation('common')

  const config = [
    {
      name: t('why_join_mentorship'),
      description: t('why_join_mentorship_description'),
    },
    {
      name: t('why_join_team_up'),
      description: t('why_join_team_up_description'),
    },
    {
      name: t('why_join_exposure'),
      description: t('why_join_exposure_description'),
    },
  ]

  return (
    <div>
      <div className="mb-20">
        <HeaderSection content={t('co_hosts')} />
      </div>
      <div className="mt-16 grid grid-cols-3 grid-rows-1 gap-7 px-16">
        {config.map(x => (
          <InfoCard name={x.name} key={x.name} backgroundClass={'partner'} description={x.description} />
        ))}
      </div>
    </div>
  )
}
