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
                <p>
                  <b>[Workshop] </b>
                  hosted by Makoto from ENS
                </p>
              </div>
            ),
          },
          {
            time: '22:00',
            content: (
              <div>
                <p>
                  <b>Team Formation Session</b>
                  join Discord team forming channel prior to this live session
                </p>
              </div>
            ),
          },
        ],
      },
      {
        day: 'May 19th',
        times: [
          {
            time: '18:00',
            content: (
              <div>
                <p>
                  <b>[Workshop] </b>
                  Building APIs to index blockchain data using The Graph protocol by Pranav
                </p>
              </div>
            ),
          },
          {
            time: '20:00',
            content: (
              <div>
                <p>
                  <b>[Workshop] </b>
                  Zero to Mint in 1 Hour: Create and deploy an NFT DApp and workshop Hosted by Emily Lin from ConsenSys
                </p>
              </div>
            ),
          },
          {
            time: '21:00',
            content: (
              <div>
                <p>
                  <b>[Workshop] </b>
                  How to break a smart contract: common security vulnerabilities hosted by Chris Anatalio from ConsenSys
                </p>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    during: 'Official Hackathon',
    days: [
      {
        day: 'May 20th',
        times: [
          {
            time: '00:00',
            content: (
              <div>
                <p>
                  <b>Registration Deadline</b>
                </p>
                <p>Hacking Kickoff and Logistics.</p>
                <p>(Announcement at ETH Shanghai main event)</p>
              </div>
            ),
          },
        ],
      },
      {
        day: 'May 21th',
        times: [
          {
            time: '10:00',
            content: (
              <div>
                <p>
                  <b>#BUIDL NOW!</b>
                </p>
              </div>
            ),
          },
          {
            time: '10:00',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> Explaining CyberConnect Protocol and how to use CyberConnect API</b>
                </p>
                <p>Hosted by Zhimao from CyberConnect.</p>
              </div>
            ),
          },
        ],
      },
      {
        day: 'May 22th',
        times: [
          {
            time: '10:00',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> Open box with KNN3 on Web3 social d/apps, relational analytics tooling.</b>
                </p>
                <p>Hosted by Yu Wenqing from KNN3.</p>
              </div>
            ),
          },
          {
            time: '22:00',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> Intro to Lit Protocol</b>
                  by David Sneider.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        day: 'May 24th',
        times: [
          {
            time: '10:00',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> Building on Polygon: 101</b>
                </p>
                <p>Hosted by Siraj, Kevin Ang, and Sandipan from Polygon.</p>
              </div>
            ),
          },
          {
            time: '10:30',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> How to create a web3 DApp through ChainIDE</b>
                </p>
                <p>Hosted by Ling from ChainIDE.</p>
              </div>
            ),
          },
          {
            time: '21:00',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> Create Delegation DAO DApp on Moonbeam through Precompile</b>
                </p>
                <p>Hosted by Henry from Moonbeam.</p>
              </div>
            ),
          },
          {
            time: '22:00',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> Write Smart Contracts in JavaScript</b>
                </p>
                <p>Hosted by Robert Yan from NEAR Protocol</p>
              </div>
            ),
          },
        ],
      },
      {
        day: 'May 25th',
        times: [
          {
            time: '10:00',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> hosted by Bidhan Roy from Arweave</b>
                </p>
                <p>
                  Workshop 🛠
                  <b> How to create your KwilDB from scratch with Brennan Lamey.</b>
                </p>
                <p>Hosted by Brennan Lamey from Kwil</p>
              </div>
            ),
          },
          {
            time: '10:30',
            content: (
              <div>
                <p>
                  Workshop 🛠
                  <b> Basic usage and advantages of Meson services.</b>
                </p>
                <p>Hosted by Keshin from Meson Network</p>
              </div>
            ),
          },
        ],
      },
      {
        day: 'May 31st',
        times: [
          {
            time: '23:59',
            content: (
              <div>
                <p>
                  <b>Project Submission Deadline</b>
                </p>
              </div>
            ),
          },
        ],
      },
      {
        day: 'June 1st-2nd',
        times: [
          {
            time: '23:59',
            content: (
              <div>
                <p>
                  <b>Judging Period</b>
                </p>
              </div>
            ),
          },
        ],
      },
      {
        day: 'June 3rd',
        times: [
          {
            time: '9:00-12:00',
            content: (
              <div>
                <p>
                  <b>Demo Day</b>
                </p>
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
    <div id="schedule" className="mb-20 flex flex-col gap-y-20 text-white xl:px-28">
      <HeaderSection content={t('schedule')} />
      <div className="flex flex-col gap-y-16">
        {agendaConfig.map((x) => (
          <div key={x.during}>
            <h4 className="mb-9 text-2xl font-bold xl:text-4xl">{x.during}</h4>
            <div className="flex flex-col gap-y-8">
              {x.days.map((t) => (
                <div key={t.day} className="mt-4 flex flex-col items-center gap-4 xl:flex-row">
                  <div className="flex-shrink-0 flex-grow-0 text-right text-note xl:w-1/5 xl:text-white">
                    <time className="font-bold">{t.day}</time>
                  </div>
                  <div className="flex w-full flex-shrink-0 flex-grow-0 flex-col gap-x-14 gap-y-9 bg-footer p-6 xl:w-4/5 xl:bg-transparent xl:p-0">
                    {t.times.map((y, index) => (
                      <div key={y.time + t.day + index} className="flex gap-x-4 xl:gap-x-12">
                        <div className="w-1/5 flex-shrink-0 flex-grow-0 text-right">
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
