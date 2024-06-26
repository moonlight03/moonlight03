export type SiteConfig = {
  title: string
  subtitle: string
  site: string
  lang: string
  repo: string
  themeHue: number
  banner: {
    enable: boolean
    src: string
  }

  favicon: Favicon[]
}

export type Favicon = {
  src: string,
  theme?: 'light' | 'dark'
  sizes?: string
}

export enum LinkPreset {
  Home = 0,
  Archive = 1,
  About = 2,
}

export type NavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[]
}

export type ProfileConfig = {
  avatar?: string
  name: string
  bio1: string
  bio2: string
  email: string
  phone: string
  links: {
    name: string
    url: string
    icon: string
  }[]
}

export type LicenseConfig = {
  enable: boolean
  name: string
  url: string
}
