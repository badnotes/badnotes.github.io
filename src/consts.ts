
export const KNOWN_LANGUAGES = {
  Deutsch: 'de',
  English: 'en',
  中文: 'zh'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export type Cards = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const CARDS: Cards = {
  de: {
  },
  en: {
  },
  zh: [
  	{ title: 'Notes', url: 'https://notes.fyme.cc', hero: '/images/introducing-astro.jpg', pubDate: '2024-07-09'},
  	{ title: 'Fyne-docs', url: 'https://fyne-docs.fyme.cc', hero: '/images/doc.jpg', pubDate: '2024-07-10'},
  ]
}
