/* This example requires Tailwind CSS v2.0+ */
import { useMemo } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Logo } from './Logo'
import { CloseIcon } from './CloseIcon'
import { MenuIcon } from './MenuIcon'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const LocaleMap: Record<string, string> = {
  en: 'Chinese',
  zh: 'English',
}

interface NavItem {
  name: string
  href: string
  current: boolean
}

const NavItem = ({ item }: { item: NavItem }) => {
  return (
    <div
      className="inline-flex h-full items-center hover:border-y-4 hover:border-b-nav border-t-transparent"
      key={item.name}
    >
      <a
        href={item.href}
        className={classNames(item.current ? '' : '', 'rounded-md px-3 py-2 font-medium font-medium text-white')}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </a>
    </div>
  )
}

export default function Navigation() {
  const router = useRouter()
  const { t } = useTranslation('common')

  const navigation: NavItem[] = useMemo(
    () => [
      { name: t('menu_join_discord'), href: '#', current: true },
      { name: t('menu_about_us'), href: '#about-us', current: false },
      { name: t('menu_schedule'), href: '#schedule', current: false },
    ],
    [],
  )

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="relative z-10 h-26 w-full bg-nav/[0.8] px-4 lg:px-9" style={{ backdropFilter: 'blur(8px)' }}>
            <div className="relative flex h-full items-center justify-between">
              <div className="flex h-full flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                <div className="flex h-full flex-shrink-0 items-center">
                  <Logo />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex h-full space-x-4">
                    {navigation.map(item => (
                      <NavItem key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex xl:hidden h-full items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:hidden">
                <Menu as="div" className="relative ml-3">
                  <div className="flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-main hover:text-white">
                      {open ? <CloseIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
                    </Disclosure.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? '' : '',
                    'block rounded-md px-3 py-2 text-base font-medium text-white',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
