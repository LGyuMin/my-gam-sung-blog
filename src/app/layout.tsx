import type { Metadata } from 'next'
import Link from 'next/link'

import '../common_style/globals.css'
import '../common_style/common.scss'

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html>
            <body>
                    <header className='main_banner font_kalnia'>
                        <h1>
                            <Link href={'/'}>My Gam-Sung Blog</Link>
                        </h1>
                    </header>
                    <section className='main_section'>
                        {children}
                    </section>
            </body>
        </html>
    )
}
