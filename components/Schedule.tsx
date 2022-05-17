import { useTranslation } from 'next-i18next'
import { HeaderSection } from './HeaderSection'

const agendaConfig = [
  {
    during: 'Pre-game',
    days: [
      {
        day: 'May 18th',
        times: [
          {
            time: '21:00',
            content: (
              <div>
                <p>[Workshop hosted by Makoto from ENS]</p>
              </div>
            ),
          },
          {
            time: '22:00',
            content: (
              <div>
                <p>Team Formation Session</p>
                <p>(join Discord team forming channel prior to this live session)</p>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    during: '正式时间',
    days: [
      {
        day: 'May 18th',
        times: [
          {
            time: '21:00',
            content: (
              <div>
                <p>[Workshop hosted by Makoto from ENS]</p>
              </div>
            ),
          },
          {
            time: '22:00',
            content: (
              <div>
                <p>Team Formation Session</p>
                <p>(join Discord team forming channel prior to this live session)</p>
              </div>
            ),
          },
        ],
      },
    ],
  },
]

export const Schedule = () => {
  const { t } = useTranslation('common')
  return (
    <div id="schedule" className="flex flex-col gap-y-20 px-28 text-white mb-20">
      <HeaderSection content={t('schedule')} />
      <div className="flex flex-col gap-y-16">
        {agendaConfig.map(x => (
          <div key={x.during}>
            <h4 className="mb-9 text-4xl font-bold">{x.during}</h4>
            <div className="flex flex-col gap-y-8">
              {x.days.map(t => (
                <div key={t.day} className="flex gap-x-12 items-center">
                  <div className="w-1/3 text-right">
                    <time>{t.day}</time>
                  </div>

                  <div className="flex gap-x-14 gap-y-9 flex-col">
                    {t.times.map(y => (
                      <div className="flex gap-x-12">
                        <div key={y.time + t.day}>
                          <time>{y.time}</time>
                        </div>
                        <div>{y.content}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
