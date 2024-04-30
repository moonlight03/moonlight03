import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/moonlight03',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/moonlight03/about',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/moonlight03/archive',
  },
}
