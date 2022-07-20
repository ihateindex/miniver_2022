import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoaderInfo, changeTransitionInfo } from './../store';




function Loader(props) {

    let dispatch = useDispatch();

    let transitionInfo = useSelector((state) => {
        return state.transitionInfo;
    });
    console.log(transitionInfo);

    let loaderInfo = useSelector((state) => {
        return state.loaderInfo;
    });

    console.log(loaderInfo);

    let loaderConfiguration = {
        // default: { y: '100%'},
        initial: {
            visibility: 'visible',
        },
        loading: {
            y: 0,
            // visibility: 'visible',
            transition: {
                duration: 0.4,
            },
        },
        unLoading: {
            y: '-100%',
            // visibility: 'hidden',
            transition: {
                duration: 0.4,
            },
        },
    };
    // }
    
    useEffect(() => {
        // console.log(props);
        // console.log('로더 마운트');
        return () => {
            // console.log('로더 언마운트');
        };
    }, []);

    useEffect(() => {
        // console.log(props);
        // console.log('로더 마운트');
        if(transitionInfo.state === 'start') {
            // dispatch(changeLoaderInfo({ state: 'loading' }));
        }
        return () => {
            // console.log('로더 언마운트');
        };
    }, [transitionInfo.state]);
    return (
        // <motion.div variants={animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 2 }}>
        <>
                <div className="loader">
                    <motion.div
                        variants={loaderConfiguration}
                        animate={loaderInfo.state}
                        onAnimationStart={(definition) => {
                            console.log('로더 트랜지션 시작');
                            console.log('definition:', definition);
                        }}
                        onAnimationComplete={(definition) => {
                            console.log('로더 트랜지션 끝');
                            console.log('definition:', definition);
                            console.log(loaderInfo);
                            if(definition === 'loading') {
                                dispatch(changeTransitionInfo({state:"start", page: loaderInfo.page}));
                            }
                        }}
                        className="loader--bg-slider"
                    ></motion.div>
                </div>
        </>
    );
}
export default Loader;
