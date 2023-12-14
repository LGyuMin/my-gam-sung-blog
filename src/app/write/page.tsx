import { playfair_display } from '@/font'
import styles from '@/app/page.module.scss'

export default function Write() {
    return (
        <>
            <div className={`${playfair_display.className} ${styles.title_box}`}>
                <h2>Write</h2>
            </div>
        </>
    )
}