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

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex min-h-screen flex-col bg-main">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@realMaskNetwork" />
        <meta name="twitter:title" content="ETH SHANGHAI Hackathon" />
        <meta name="twitter:description" content="Taking place (on air) May 20 - Jun3, 2020" />
        <meta name="twitter:image" content="https://eth-shanghai-hackathon-website.vercel.app/images//share-card.jpg" />
        <meta property="og:image" content="https://eth-shanghai-hackathon-website.vercel.app/images//share-card.jpg" />
      </Head>
      <header>
        <Navigation />
      </header>
      <div>
        <Banner>
          <div className="mb-16 flex flex-col justify-center gap-y-6 text-white">
            <div className="flex justify-center">
              <button
                className="hover-shadow flex w-1/2 justify-center bg-helper py-3 text-2xl font-bold text-link"
                style={{ width: 229 }}>
                <a href="https://gitcoin.co/hackathon/ethshanghai/onboard" target="_blank" className="inline-flex">
                  Apply
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
