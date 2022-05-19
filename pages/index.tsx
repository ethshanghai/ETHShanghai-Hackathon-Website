import type { NextPage } from 'next'
import Navigation from '../components/Navigation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Banner } from '../components/Banner'
import { useTranslation } from 'next-i18next'
import { Schedule } from '../components/Schedule'
import { Footer } from '../components/Footer'
import { CoHost } from '../components/CoHost'
import { Sponsors } from '../components/Sponsors'
import { Prizes } from '../components/Prizes'
import { Highlights } from '../components/Highlights'
import { AboutUs } from '../components/AboutUs'
import { Hero } from '../components/Hero'
import Head from 'next/head'
import { Judges } from '../components/Judges'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex min-h-screen flex-col bg-main">
      <Head>
        <title>ETH SHANGHAI Hackathon</title>
        <meta
          name="description"
          content="Join us for the ETH Shanghai hackathon. BUIDL the next generation of Web3 social application alongside with developers, creators, artists, and entrepreneur all over the world."
        />
        <meta property="og:title" content="ETH SHANGHAI Hackathon" />
        <meta
          property="og:description"
          content="Join us for the ETH Shanghai hackathon. BUIDL the next generation of Web3 social application alongside with developers, creators, artists, and entrepreneur all over the world."
        />
        <meta property="og:site_name" content="ETH SHANGHAI Hackathon" />
        <meta property="og:image" content="https://hackathon.ethshanghai.org/images/share-card.jpg" />
        <meta property="og:url" content="https://hackathon.ethshanghai.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hackathon.ethshanghai.org/images/share-card.jpg" />
        <meta itemProp="name" content="ETH SHANGHAI Hackathon" />
        <meta itemProp="description" content="Web 3.0 Developer Summit, taking place on May 20, 2022" />
        <meta itemProp="image" content="https://hackathon.ethshanghai.org/images/share-card.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@realMaskNetwork" />
        <meta name="twitter:title" content="ETH SHANGHAI Hackathon" />
        <meta name="twitter:description" content="Taking place (on air) May 20 - Jun3, 2020" />
        <meta name="twitter:image" content="https://hackathon.ethshanghai.org/images/share-card.jpg" />
      </Head>
      <header>
        <Navigation />
      </header>
      <div>
        <Banner>
          <div className="mb-16 flex flex-col justify-center gap-y-6 text-white">
            <div className="flex justify-center">
              <button
                className="hover-shadow flex w-1/2 justify-center bg-helper py-3 text-xl font-bold text-link xl:text-2xl"
                style={{ width: 229 }}>
                <a href="https://gitcoin.co/hackathon/ethshanghai/onboard" target="_blank" className="inline-flex">
                  Register Now
                </a>
              </button>
            </div>
            <div>
              <p className="text-center text-2xl font-semibold">Apply before 5/20/2022</p>
            </div>
          </div>
        </Banner>
      </div>
      <main className="container m-auto p-8">
        <section className="mt-28">
          <Hero />
        </section>
        <section className="mt-28">
          <CoHost />
        </section>
        <section className="mt-28">
          <Sponsors />
        </section>
        <section className="mt-28">
          <Prizes />
        </section>
        <section>
          <Highlights />
        </section>
        <section className="mt-28">
          <AboutUs />
        </section>
        <section className="mt-28">
          <Schedule />
        </section>
        <section className="mt-28">
          <Judges />
        </section>
      </main>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
})

export default Home
