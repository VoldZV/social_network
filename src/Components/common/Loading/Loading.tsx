import React from 'react';
import loading from '../svg/loading.svg'
import s from './Loading.module.css'

export const Loading = () => {
    return (
        <div className={s.loadingWrapper}>
            <img src={loading} alt=""/>
        </div>
    );
};
