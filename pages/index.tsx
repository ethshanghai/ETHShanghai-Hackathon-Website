import type { NextPage } from 'next'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Banner } from '../components/Banner'
import { useTranslation } from 'next-i18next'
import { SummitAgenda } from '../components/SummitAgenda'
import { Footer } from '../components/Footer'
import { Speakers } from '../components/Speakers'
import { Hosts } from '../components/Hosts'
import { CommunitySupport } from '../components/CommunitySupport'
import {CoHost} from "../components/CoHost";
import {Sponsors} from "../components/Sponsors";
import {Prizes} from "../components/Prizes";
import {WhyJoin} from "../components/WhyJoin";
import {AboutUs} from "../components/AboutUs";

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex min-h-screen flex-col bg-main">
      <header>
        <Navigation />
      </header>
      <div>
        <Banner>
          <div className="mb-16 flex flex-col justify-center gap-y-6 text-white">
            <div className="flex justify-center">
              <button className="flex w-1/2 justify-center bg-helper py-3 text-2xl font-bold text-link" style={{width: 229}}>
                <span className="inline-flex">Apply</span>
              </button>
            </div>
            <div>
              <p className="text-center text-2xl font-semibold">Apply before 5/17/2022</p>
            </div>
          </div>
        </Banner>
      </div>
      <main className="container m-auto p-8">
        <section className="mt-28">
          <CoHost />
        </section>
        <section className="mt-28">
          <Sponsors />
        </section>
        <section className="mt-28">
          <Prizes />
        </section>
        <section className="mt-28">
          <WhyJoin />
        </section>
        <section className="mt-28">
          <AboutUs />
        </section>
        <section className="mt-28">
          <SummitAgenda />
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
