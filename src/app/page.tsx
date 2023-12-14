import styles from './page.module.scss'
import Link from 'next/link'
import { playfair_display } from '@/font'

export default function Home() {
    return (
        <>
            <div className={`${playfair_display.className} ${styles.title_box}`}>
                <h2>Mok-Cha</h2>
                <Link href={'/write'}>write</Link>
            </div>
            <ul className={styles.posting_list}>
                <li>
                    <div className={styles.img_box}></div>
                    <div className={styles.text_box}>
                        <p className={styles.title}>타이틀 이지롱롱롱롱 타이틀틀틅릍르</p>
                        <p className={styles.content}>content</p>
                    </div>
                    <div className={styles.date}>2023.00.00</div>
                </li>
                <li>
                    <div className={styles.img_box}></div>
                    <div className={styles.text_box}>
                        <p className={styles.title}>타이틀 이지롱롱롱롱 타이틀틀틅릍르</p>
                        <p className={styles.content}>content</p>
                    </div>
                    <div className={styles.date}>2023.00.00</div>
                </li>
                <li>
                    <div className={styles.img_box}></div>
                    <div className={styles.text_box}>
                        <p className={styles.title}>타이틀 이지롱롱롱롱 타이틀틀틅릍르</p>
                        <p className={styles.content}>content</p>
                    </div>
                    <div className={styles.date}>2023.00.00</div>
                </li>
                <li>
                    <div className={styles.img_box}></div>
                    <div className={styles.text_box}>
                        <p className={styles.title}>타이틀 이지롱롱롱롱 타이틀틀틅릍르</p>
                        <p className={styles.content}>content</p>
                    </div>
                    <div className={styles.date}>2023.00.00</div>
                </li>
                <li>
                    <div className={styles.img_box}></div>
                    <div className={styles.text_box}>
                        <p className={styles.title}>타이틀 이지롱롱롱롱 타이틀틀틅릍르</p>
                        <p className={styles.content}>content</p>
                    </div>
                    <div className={styles.date}>2023.00.00</div>
                </li>
                <li>
                    <div className={styles.img_box}></div>
                    <div className={styles.text_box}>
                        <p className={styles.title}>타이틀 이지롱롱롱롱 타이틀틀틅릍르</p>
                        <p className={styles.content}>content</p>
                    </div>
                    <div className={styles.date}>2023.00.00</div>
                </li>
                <li>
                    <div className={styles.img_box}></div>
                    <div className={styles.text_box}>
                        <p className={styles.title}>타이틀 이지롱롱롱롱 타이틀틀틅릍르</p>
                        <p className={styles.content}>content</p>
                    </div>
                    <div className={styles.date}>2023.00.00</div>
                </li>
            </ul>
        </>
    )
}
