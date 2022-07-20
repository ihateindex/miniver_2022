import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import styles from './WorkBox.module.scss';
import { changeLoaderInfo, changeTransitionState } from '../store';

function WorkBox(props) {
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const location = useLocation();

    let transitionState = useSelector((state) => {
        return state.transitionState;
    });

    let loaderInfo = useSelector((state) => {
        return state.loaderInfo;
    });

    let goDetail = () => {
        dispatch(changeLoaderInfo({state:'loading'}));
        console.log('워크박스 로더 스테이트:', loaderInfo);
    };

    // ! 모든 페지 바라보고 있음 start말고 페이지 명등으로 수정해야함
    // useEffect(() => {
    //     if (transitionState === 'start') {
    //         console.log('워크박스 페이지 트랜지션 스테이트:', transitionState);
    //         dispatch(changeTransitionState('animate'));
    //         navigate(`/project/${props.item.idx}`);
    //     }
    // }, [transitionState]);

    return (
        <Link to={`/project/${props.item.idx}`} className={`workbox ${styles.workbox} ${styles[props.thumb]}`}>
        {/* <div onClick={goDetail} className={`workbox ${styles.workbox} ${styles[props.thumb]}`}> */}
            <div className={styles.wrapper}>
                <div className={styles['item-img']}>
                    {props.thumb === 'square' ? (
                        <img src={`/works/${props.item.idx}/thumb_square/${props.item.thumb_square}`}></img>
                    ) : (
                        <img src={`/works/${props.item.idx}/thumb_rectangle/${props.item.thumb_rectangle}`}></img>
                    )}
                </div>
                <div className={styles['box-overlay']}>
                    <div className={styles['logo-img']} style={{ backgroundImage: `url(/works/${props.item.idx}/logo_img/${props.item.logo_img})` }}></div>
                </div>
            </div>
            {props.desc ? (
                <div className={`workbox__desc ${styles['workbox-desc']}`}>
                    <p className={styles['client-name']}>{props.item.client_name}</p>
                    <span className={styles.title}>{props.item.work_title}</span>
                </div>
            ) : (
                ''
            )}
        {/* </div> */}
        </Link>
    );
}

export default WorkBox;
