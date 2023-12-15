"use client"

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react'
import ReactQuill, { ReactQuillProps} from 'react-quill';
import dayjs from 'dayjs';

import styles from '@/app/page.module.scss'
import WriteStyle from './write.module.scss'
import 'react-quill/dist/quill.snow.css'
import { useRouter } from 'next/navigation';

interface IPostInfo {
    title: string;
    content: string;
}

export default function Write() {
    const router = useRouter();
    
    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    ["image"],
                    [{ header: [1, 2, 3, 4, 5, false] }],
                    ["bold", "underline"],
                ],
            },
        };
    }, [])

    const [postInfo, setPostInfo] = useState<IPostInfo>({
        title: '',
        content: ''
    })

    const changePostInfo = useCallback((type: keyof IPostInfo, value: string) => {
        setPostInfo(oldVal => ({...oldVal, [type]: value}))
    }, [])

    const savePosting = useCallback(() => {
        const created_at = dayjs().format('YYYY-MM-DD')
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: postInfo.title,
                content: postInfo.content,
                created_at: created_at
            })
        }

        fetch(`http://localhost:9999/posts`, options)
        .then(res => res.json())
        .then(result => {
            const lastId = result.id;
            router.refresh();
            router.push(`/posting/${lastId}`);
         })
    }, [postInfo])

    return (
        <>
            <div className={styles.title_box}>
                <h2 className='font_play_fair'>Write</h2>
            </div>
            <div className={`${WriteStyle.editor_box} font_noto_sans`}>
                <input 
                    type='text'
                    placeholder='제목을 입력하세요.' 
                    className={WriteStyle.title_input}
                    onChange={({target}) => changePostInfo('title', target.value)}
                    value={postInfo.title}
                />

                <ReactQuill
                    theme='snow'
                    placeholder='내용을 입력하세요.'
                    onChange={(value) => {
                        changePostInfo('content', value)
                    }}
                    value={postInfo.content}
                    className={WriteStyle.editor_area}
                    modules={modules}
                />

                <div className={WriteStyle.editor_btn_box}>
                    <button onClick={savePosting}>save</button>
                    <button>cancle</button>
                </div>
            </div>
        </>
    )
}