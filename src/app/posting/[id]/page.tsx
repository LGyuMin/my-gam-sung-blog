import Link from 'next/link'
import style from './posting.module.scss'

export default async function Posting ({ 
    params 
}: { 
    params: { id: string } 
}) {
    return (
        <>
            <div className={style.posting_title_box}>
                <h2 className='font_noto_sans'>글 제목</h2>
                <div className={`${style.button_box} font_play_fair`}>
                    <Link href={'/edit'}>Edit</Link>
                    <a href="#">Delete</a>
                </div>
            </div>
            <div className='font_noto_sans'>
                <p className={style.posting_date}>2023-00-00</p>
                <div>글 내용</div>
            </div>
        </>
    )
}