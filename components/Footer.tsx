import { useTranslation } from 'next-i18next'
import {Logo} from "./Logo";

export const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="flex justify-center gap-x-80 bg-footer p-16 text-white">
      <Logo />
    </footer>
  )
}
