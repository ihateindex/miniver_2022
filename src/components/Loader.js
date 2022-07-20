import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoaderState, changeTransitionState } from './../store';




function Loader(props) {

    let dispatch = useDispatch();

    let transitionState = useSelector((state) => {
        return state.transitionState;
    });
    console.log(transitionState);

    let loaderState = useSelector((state) => {
        return state.loaderState;
    });

    let loaderConfiguration = {
        // default: { y: '100%'},
        initial: {
            visibility: 'visible',
        },
        loading: {
            y: 0,
            // visibility: 'visible',
            transition: {
                duration: 1,
            },
        },
        unLoading: {
            y: '-100%',
            // visibility: 'hidden',
            transition: {
                duration: 1,
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
    return (
        // <motion.div variants={animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 2 }}>
        <>
                <div className="loader">
                    <motion.div
                        variants={loaderConfiguration}
                        animate={loaderState}
                        onAnimationStart={(definition) => {
                            console.log('로더 트랜지션 시작');
                            console.log('definition:', definition);
                        }}
                        onAnimationComplete={(definition) => {
                            console.log('로더 트랜지션 끝');
                            console.log('definition:', definition);
                            console.log(loaderState);
                            if(definition === 'loading') {
                                dispatch(changeTransitionState('start'));
                            }
                        }}
                        className="loader--bg-slider"
                    ></motion.div>
                </div>
        </>
    );
}
export default Loader;
