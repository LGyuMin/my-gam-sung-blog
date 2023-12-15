import Link from 'next/link'
import style from './posting.module.scss'

import { IPost } from '@/types'

export default async function Posting ({ 
    params 
}: { 
    params: { id: string } 
}) {
    const res = await fetch(`http://localhost:9999/posts/${params.id}`, {
        cache: 'no-store'
    });
    const post: IPost = await res.json()
    return (
        <>
            <div className={style.posting_title_box}>
                <h2 className='font_noto_sans'>{ post.title }</h2>
                <div className={`${style.button_box} font_play_fair`}>
                    <Link href={'/edit'}>Edit</Link>
                    <a href="#">Delete</a>
                </div>
            </div>
            <div className='font_noto_sans'>
                <p className={style.posting_date}>{ post.created_at }</p>
                <div>{ post.content }</div>
            </div>
        </>
    )
}