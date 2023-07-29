import React from 'react';
import s from './Post.module.css'

type PostPT = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostPT> = ({message, likesCount}) => {
    return (
        <div className={s.post}>
            <img className={s.postAva} src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-statuetka-v-vide-ulyubayushhegosya-smajla.jpg" alt={'postAva'}/>
            <span>{message}</span>
            <span>Likes</span>
            <span>{likesCount}</span>
        </div>
    );
};
