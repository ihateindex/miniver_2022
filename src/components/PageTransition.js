import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { changeLoaderState, changeTransitionState } from './../store';
import { useDispatch, useSelector } from 'react-redux';
// const animationConfiguration = {
//     // default: { position: 'absolute'},
//     initial: { opacity: 0, zIndex: 2, position: 'absolute', width: '100%'},
//     animate: { opacity: 1 },
//     exit: { zIndex: 1, },
// };
// const PageTransition = ({ children }) => {
//     // useEffect(() => {
//     //     console.log(children);

//     //     return () => {
//     //         console.log('unmount');
//     //     };
//     // }, []);
//     // return (
//     //         <motion.div variants={animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 1 }}>
//     //             {children}
//     //         </motion.div>
//     // );
// };
function PageTransition(props) {
    let transitionState = useSelector((state) => {
        return state.transitionState;
    });

    let loaderState = useSelector((state) => {
        return state.loaderState;
    });

    let dispatch = useDispatch();

    let animationConfiguration = {
        // default: { position: 'absolute'},
        initial: {
            opacity: 0,
            zIndex: 2,
            position: 'absolute',
            width: '100%',
        },
        animate: {
            opacity: 1,
            delay: 2,
            // transition: {
            //     delay: 1,
            // },
        },
        exit: {
            opacity: 0,
            zIndex: 1,
            transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
            },
        },
    };
    // }
    useEffect(() => {
        console.log(props);
        console.log('page transition mount');
        console.log('페이지 트랜지션 상태', transitionState);
        if(transitionState === 'initial') {
            dispatch(changeLoaderState('unLoading'));
        }
        // ! 맨 처음 마운트 일때만 언로딩으로 변경
        return () => {
            console.log('page transition unmount');
            console.log(props);
            // dispatch(changeLoaderState('unLoading'));
        };
    }, []);
    return (
        // <motion.div variants={animationConfiguration} initial="initial" animate="animate" exit="exit" transition={{ duration: 2 }}>
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationStart={(definition) => {
                console.log('페이지 트랜지션 시작');
                console.log('definition:', definition);
                // if(definition === 'exit') {
                //     console.log('definition: exit');
                //     // dispatch(changeTransitionState('loading'));
                //     console.log('페이지 트랜지션 상태', transitionState);
                // }
            }}
            onAnimationComplete={(definition) => {
                console.log('페이지 트랜지션 끝');
                console.log('definition:', definition);
                // dispatch(changeLoaderState('unLoading'));
                dispatch(changeLoaderState('unLoading'));
                // console.log(loaderState);
            }}
        >
            {props.children}
        </motion.div>
    );
}
export default PageTransition;
