"use client"

import { useState } from 'react'
import ReactQuill from 'react-quill';

import styles from '@/app/page.module.scss'
import WriteStyle from './write.module.scss'
import 'react-quill/dist/quill.snow.css'

export default function Write() {
    
    return (
        <>
            <div className={styles.title_box}>
                <h2 className='font_play_fair'>Write</h2>
            </div>
            <div className={`${WriteStyle.editor_box} font_noto_sans`}>
                <input type="text" placeholder='제목을 입력하세요.' className={WriteStyle.title_input} />
                <ReactQuill placeholder='내용을 입력하세요.'>
                    <div className={WriteStyle.editor_area}/>
                </ReactQuill>
                <div className={WriteStyle.editor_btn_box}>
                    <button>save</button>
                    <button>cancle</button>
                </div>
            </div>
        </>
    )
}