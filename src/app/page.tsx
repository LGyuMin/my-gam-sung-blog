import styles from './page.module.scss'
import Link from 'next/link'

import { IPost } from '@/types'

export default async function Home() {
    const res = await fetch('http://localhost:9999/posts', {
        cache: 'no-store'
    })
    const posts: IPost[] = await res.json();
    return (
        <>
            <div className={`${styles.title_box} font_play_fair`}>
                <h2>Mok-Cha</h2>
                <Link href={'/write'}>write</Link>
            </div>
            <ul className={`${styles.posting_list}`}>
                <li className='font_noto_sans'>
                    {
                        posts.map(post => (
                            <Link key={post.id} href={`/posting/${post.id}`}>
                                <div className={styles.img_box}></div>
                                <div className={styles.text_box}>
                                    <p className={`${styles.title}`}>{ post.title }</p>
                                    <p className={styles.content}>{ post.content }</p>
                                </div>
                                <div className={styles.date}>{ post.created_at }</div>
                            </Link>
                        ))
                    }
                </li>
            </ul>
        </>
    )
}
