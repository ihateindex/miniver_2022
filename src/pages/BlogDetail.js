import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useParams, Link, useLocation } from 'react-router-dom';
import { changeColor } from './../store.js';
import { useDispatch, useSelector } from 'react-redux';
import PageTransition from '../components/PageTransition';
import { Scrollbar, A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useResizeObserver from '@react-hook/resize-observer';

import Footer from '../components/Footer';
import Header from '../components/Header';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function BlogDetail(props) {
    const params = useParams();
    let dispatch = useDispatch();
    let device = useSelector((state) => {
        return state.currentDevice;
    });
    const [blogData, setBlogData] = useState([]);
    const [editorData, setEditorData] = useState([]);

    useEffect(() => {
        dispatch(changeColor('black'));
        console.log(params.id);
        async function getBlogData() {
            const result = await axios({
                method: 'get',
                url: '/api/posting/getdetail',
                params: { idx: params.id },
            });
            
            console.log(result.data);
            setBlogData(result.data);
            setEditorData(JSON.parse(result.data.blog_json));
            
        }
        getBlogData();
    }, []);
    
    const convertDateENUS = (dateString) => {
        let raw = new Date(dateString);
        const year = raw.getFullYear();
        const month = raw.toLocaleString('en-US', { month: 'long' });
        const day = raw.getDate();
        const str = month + ' ' + day + ', ' + year;

        return str;
    }
    const convertEditorBlock = (block, key) => {
        // console.log(block);
        let returnElem = null;
        let classOptions = [];
        let classOptionsStr = '';
        
        switch(block.type) {
            case "image":
                block.data.stretched && classOptions.push('is-stretched');
                block.data.withBackground && classOptions.push('is-withBackground');
                block.data.withBorder && classOptions.push('is-withBorder');
                
                returnElem = `<img src=${block.data.url}>`;
            break;
            case "header":
                returnElem = `<h3>${block.data.text}</h3>`;
            break;
            case "paragraph":
                returnElem = `<p>${block.data.text}</p>`;
            break;
            default:
                returnElem = '';
            break;
        }

        classOptionsStr = classOptions.join(' ');

        return <div key={key} className={classOptionsStr} dangerouslySetInnerHTML={ {__html: returnElem} }></div>;
    }
    const goTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 0.1,
        });
    };


    return (
        <PageTransition>
            <div id="container" className={props.pageName}>
                <Header />
                <div className="contents">
                    <div className="grid-inner">
                        {blogData &&
                        <>
                        <div className="blog-content">
                            <div className="blog-content__head">
                                <p className="blog-content__head-date">
                                    {/* {blogData.blog_register_date} */}
                                    {convertDateENUS(blogData.blog_register_date)}
                                </p>
                                <h2 className="blog-content__head-subject">
                                    {blogData.blog_title}
                                </h2>
                                <div className="blog-content__head-writer">
                                    <span className="icon" style={{ backgroundColor: blogData.blog_color }}>
                                        <svg viewBox="0 0 8.5 10.2">
                                            <path d="M8.5,0v10.2H6.1V3.3l-1,4.6H3.4l-1-4.4v6.7H0V0h3.6c0.1,0.6,0.7,4.1,0.7,4.1L4.9,0H8.5L8.5,0z" fill="#ffffff"/>
                                        </svg>
                                    </span>
                                    <span className="author">{blogData.blog_writer}</span>
                                </div>
                            </div>
                            <div className="blog-content__body">
                                {editorData.blocks &&
                                    editorData.blocks.map((block, idx) => (
                                        convertEditorBlock(block, block.id)
                                    ))
                                }
                            </div>
                            <div className="blog-content__foot">
                                <button type="button" className="go-top" onClick={goTopHandler}>
                                Back to top
                                </button>
                            </div>
                        </div>
                        <div className="blog-remote">
                            <Link to="">
                                {/* adjoin */}
                            </Link>
                        </div>
                        </>
                        }
                    </div>
                </div>
                {device === 'mobile' ? null : <Footer />}
            </div>
        </PageTransition>
    );
}

export default BlogDetail;
