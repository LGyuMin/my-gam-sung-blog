import { Playfair_Display, Noto_Serif_KR } from 'next/font/google'

export const playfair_display = Playfair_Display({
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export const noto_serif_KR = Noto_Serif_KR({
    weight: ['300', '400', '500'],
    style: ['normal'],
    subsets: ['latin'],
})