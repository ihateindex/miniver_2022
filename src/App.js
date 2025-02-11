import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Press from './pages/Press';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import { setDevice } from './store.js';

import RouteChangeTracker from './components/RouteChangeTracker';
import { Helmet } from 'react-helmet-async';


import './reset.css';
import './style.scss';

function App() {
    // RouteChangeTracker();
    // let dispatch = useDispatch();
    // * Redux store를 가져와주는 useSelector()
    let themeColor = useSelector((state) => {
        // console.log(state);
        return state.themeColor;
    });
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        let winWidth = window.innerWidth;
        // * 마운트시에 데스크탑이라면 footer 숨김
        if (winWidth >= 1200) {
            dispatch(setDevice('desktop'));
        } else {
            dispatch(setDevice('mobile'));
        }

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            // console.log('윈도우 리사이즈');
            winWidth = window.innerWidth;

            if (winWidth >= 1200) {
                dispatch(setDevice('desktop'));
            } else {
                dispatch(setDevice('mobile'));
            }

            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }, []);

    return (
        <div className="App" data-theme={themeColor}>
            <Helmet>
                <meta name="title" content="미니버타이징" />
                <meta name="description" content="궁극의 용감함 크리에이티브" />
                {/* <meta name="naver-site-verification" content="a9cc2931e6ec42395359dfd359432881409c1f9a" /> */}
                {/* <meta property="og:type" content="website" /> */}
                {/* <meta property="og:title" content="미니버타이징" /> */}
                {/* <meta property="og:url" content="https://minivertising.kr" /> */}
                <meta property="og:image" content="/public/assets/og_image.jpg" />
                <meta property="og:description" content="궁극의 용감함 크리에이티브" />
                {/* <link rel="apple-touch-icon" href="/public/logo192.png" /> */}
                {/* <link rel="manifest" href="/public/manifest.json" /> */}
                <title>미니버타이징</title>
            </Helmet>
            <RouteChangeTracker location={location}/>
            <AnimatePresence>
                {/* <Header /> */}
                <Routes key={location.pathname} location={location}>
                    <Route exact path="/" element={<Home pageName="Home" />}></Route>
                    <Route path="/about" element={<About pageName="About" />}></Route>
                    <Route path="/project/*">
                        <Route index element={<Project pageName="Project" />}></Route>
                        <Route path=":id" element={<ProjectDetail pageName="ProjectDetail" initial={{ opacity: 1 }} />}></Route>
                    </Route>
                    {/* <Route path="/blog/*">
                        <Route index element={<Blog pageName="Blog" />}></Route>
                        <Route path=":id" element={<BlogDetail pageName="BlogDetail" initial={{ opacity: 1 }} />}></Route>
                    </Route> */}
                    <Route path="/press" element={<Press pageName="Press" />}></Route>
                    <Route path="/contact" element={<Contact pageName="Contact" />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
