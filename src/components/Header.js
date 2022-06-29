import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useState } from 'react';

function Header(props) {
    let [isMobile, setIsMobile] = useState(true);
    return (
        <header data-color={props.color}>
            <div className={styles.wrapper}>
                <Link to="/" className={styles.logo}>
                    <svg width="213" height="31" viewBox="0 0 213 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3105 1.54102V30H16.8418V10.7871L14.2578 30H9.66992L6.94531 11.2266V30H0.476562V1.54102H10.0566C10.3379 3.25195 10.6367 5.26758 10.9531 7.58789L11.9727 14.8301L13.6602 1.54102H23.3105ZM33.6816 1.54102V30H26.2812V1.54102H33.6816ZM53.1758 1.54102V30H46.6895L42.8398 17.0625V30H36.6523V1.54102H42.8398L46.9883 14.3555V1.54102H53.1758ZM63.5645 1.54102V30H56.1641V1.54102H63.5645ZM84.1133 1.54102L80.3516 30H69.1191L64.8477 1.54102H72.6523C73.5547 9.38086 74.1992 16.0078 74.5859 21.4219C74.9727 15.9492 75.377 11.0859 75.7988 6.83203L76.3086 1.54102H84.1133ZM85.3789 1.54102H97.7188V7.23633H92.7793V12.6328H97.4023V18.0469H92.7793V24.3047H98.2109V30H85.3789V1.54102ZM100.355 1.54102H105.594C109.086 1.54102 111.447 1.67578 112.678 1.94531C113.92 2.21484 114.928 2.90625 115.701 4.01953C116.486 5.12109 116.879 6.88477 116.879 9.31055C116.879 11.5254 116.604 13.0137 116.053 13.7754C115.502 14.5371 114.418 14.9941 112.801 15.1465C114.266 15.5098 115.25 15.9961 115.754 16.6055C116.258 17.2148 116.568 17.7773 116.686 18.293C116.814 18.7969 116.879 20.1973 116.879 22.4941V30H110.006V20.543C110.006 19.0195 109.883 18.0762 109.637 17.7129C109.402 17.3496 108.775 17.168 107.756 17.168V30H100.355V1.54102ZM107.756 6.41016V12.7383C108.588 12.7383 109.168 12.627 109.496 12.4043C109.836 12.1699 110.006 11.4258 110.006 10.1719V8.60742C110.006 7.70508 109.842 7.11328 109.514 6.83203C109.197 6.55078 108.611 6.41016 107.756 6.41016ZM134.668 1.54102V7.23633H130.273V30H122.873V7.23633H118.496V1.54102H134.668ZM143.756 1.54102V30H136.355V1.54102H143.756ZM162.406 10.1543H155.533V8.04492C155.533 7.06055 155.445 6.43359 155.27 6.16406C155.094 5.89453 154.801 5.75977 154.391 5.75977C153.945 5.75977 153.605 5.94141 153.371 6.30469C153.148 6.66797 153.037 7.21875 153.037 7.95703C153.037 8.90625 153.166 9.62109 153.424 10.1016C153.67 10.582 154.367 11.1621 155.516 11.8418C158.809 13.7988 160.883 15.4043 161.738 16.6582C162.594 17.9121 163.021 19.9336 163.021 22.7227C163.021 24.75 162.781 26.2441 162.301 27.2051C161.832 28.166 160.918 28.9746 159.559 29.6309C158.199 30.2754 156.617 30.5977 154.812 30.5977C152.832 30.5977 151.139 30.2227 149.732 29.4727C148.338 28.7227 147.424 27.7676 146.99 26.6074C146.557 25.4473 146.34 23.8008 146.34 21.668V19.8047H153.213V23.2676C153.213 24.334 153.307 25.0195 153.494 25.3242C153.693 25.6289 154.039 25.7812 154.531 25.7812C155.023 25.7812 155.387 25.5879 155.621 25.2012C155.867 24.8145 155.99 24.2402 155.99 23.4785C155.99 21.8027 155.762 20.707 155.305 20.1914C154.836 19.6758 153.682 18.8145 151.842 17.6074C150.002 16.3887 148.783 15.5039 148.186 14.9531C147.588 14.4023 147.09 13.6406 146.691 12.668C146.305 11.6953 146.111 10.4531 146.111 8.94141C146.111 6.76172 146.387 5.16797 146.938 4.16016C147.5 3.15234 148.402 2.36719 149.645 1.80469C150.887 1.23047 152.387 0.943359 154.145 0.943359C156.066 0.943359 157.701 1.25391 159.049 1.875C160.408 2.49609 161.305 3.28125 161.738 4.23047C162.184 5.16797 162.406 6.76758 162.406 9.0293V10.1543ZM172.76 1.54102V30H165.359V1.54102H172.76ZM192.254 1.54102V30H185.768L181.918 17.0625V30H175.73V1.54102H181.918L186.066 14.3555V1.54102H192.254ZM212.223 12.0176H204.822V9.43359C204.822 7.80469 204.752 6.78516 204.611 6.375C204.471 5.96484 204.137 5.75977 203.609 5.75977C203.152 5.75977 202.842 5.93555 202.678 6.28711C202.514 6.63867 202.432 7.54102 202.432 8.99414V22.6523C202.432 23.9297 202.514 24.7734 202.678 25.1836C202.842 25.582 203.17 25.7812 203.662 25.7812C204.201 25.7812 204.564 25.5527 204.752 25.0957C204.951 24.6387 205.051 23.748 205.051 22.4238V19.0488H203.557V14.7246H212.223V30H207.564L206.879 27.9609C206.375 28.8398 205.736 29.502 204.963 29.9473C204.201 30.3809 203.299 30.5977 202.256 30.5977C201.014 30.5977 199.848 30.2988 198.758 29.7012C197.68 29.0918 196.859 28.3418 196.297 27.4512C195.734 26.5605 195.383 25.6289 195.242 24.6562C195.102 23.6719 195.031 22.2012 195.031 20.2441V11.7891C195.031 9.07031 195.178 7.0957 195.471 5.86523C195.764 4.63477 196.602 3.50977 197.984 2.49023C199.379 1.45898 201.178 0.943359 203.381 0.943359C205.549 0.943359 207.348 1.38867 208.777 2.2793C210.207 3.16992 211.139 4.23047 211.572 5.46094C212.006 6.67969 212.223 8.45508 212.223 10.7871V12.0176Z" />
                    </svg>
                </Link>
                <div className={styles['nav-ham']}>
                    <button type="button" className={styles['nav-ham__btn']}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 6.81158C2 6.2593 2.44772 5.81158 3 5.81158H21C21.5523 5.81158 22 6.2593 22 6.81158C22 7.36387 21.5523 7.81158 21 7.81158H3C2.44772 7.81158 2 7.36387 2 6.81158Z"
                                fill="white"
                            />
                            <path
                                d="M5 12.8116C5 12.2593 5.44772 11.8116 6 11.8116H21C21.5523 11.8116 22 12.2593 22 12.8116C22 13.3639 21.5523 13.8116 21 13.8116H6C5.44772 13.8116 5 13.3639 5 12.8116Z"
                                fill="white"
                            />
                            <path
                                d="M5 18.8116C5 18.2593 5.44772 17.8116 6 17.8116H21C21.5523 17.8116 22 18.2593 22 18.8116C22 19.3639 21.5523 19.8116 21 19.8116H6C5.44772 19.8116 5 19.3639 5 18.8116Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`${styles['nav-block']}`}>
                    <div className={`${styles['inner']}`}>
                        <button className={`${styles['nav-block__btn-close']}`}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.27842 6.09C5.64964 5.71878 6.25151 5.71878 6.62273 6.09L18.7216 18.1889C19.0928 18.5601 19.0928 19.1619 18.7216 19.5332C18.3504 19.9044 17.7485 19.9044 17.3773 19.5332L5.27842 7.43432C4.9072 7.0631 4.9072 6.46122 5.27842 6.09Z"
                                    fill="white"
                                />
                                <path
                                    d="M5.27842 19.5332C4.90719 19.1619 4.90719 18.5601 5.27842 18.1889L17.3773 6.09C17.7485 5.71878 18.3504 5.71878 18.7216 6.09C19.0928 6.46122 19.0928 7.0631 18.7216 7.43432L6.62273 19.5332C6.25151 19.9044 5.64964 19.9044 5.27842 19.5332Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <ul>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/project">Project</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        {/* {isMobile == true ? <footer>푸터임다</footer> : null} */}
                        <footer>
                            <div className={styles.logo}>
                                <svg width="213" height="31" viewBox="0 0 213 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3105 1.54102V30H16.8418V10.7871L14.2578 30H9.66992L6.94531 11.2266V30H0.476562V1.54102H10.0566C10.3379 3.25195 10.6367 5.26758 10.9531 7.58789L11.9727 14.8301L13.6602 1.54102H23.3105ZM33.6816 1.54102V30H26.2812V1.54102H33.6816ZM53.1758 1.54102V30H46.6895L42.8398 17.0625V30H36.6523V1.54102H42.8398L46.9883 14.3555V1.54102H53.1758ZM63.5645 1.54102V30H56.1641V1.54102H63.5645ZM84.1133 1.54102L80.3516 30H69.1191L64.8477 1.54102H72.6523C73.5547 9.38086 74.1992 16.0078 74.5859 21.4219C74.9727 15.9492 75.377 11.0859 75.7988 6.83203L76.3086 1.54102H84.1133ZM85.3789 1.54102H97.7188V7.23633H92.7793V12.6328H97.4023V18.0469H92.7793V24.3047H98.2109V30H85.3789V1.54102ZM100.355 1.54102H105.594C109.086 1.54102 111.447 1.67578 112.678 1.94531C113.92 2.21484 114.928 2.90625 115.701 4.01953C116.486 5.12109 116.879 6.88477 116.879 9.31055C116.879 11.5254 116.604 13.0137 116.053 13.7754C115.502 14.5371 114.418 14.9941 112.801 15.1465C114.266 15.5098 115.25 15.9961 115.754 16.6055C116.258 17.2148 116.568 17.7773 116.686 18.293C116.814 18.7969 116.879 20.1973 116.879 22.4941V30H110.006V20.543C110.006 19.0195 109.883 18.0762 109.637 17.7129C109.402 17.3496 108.775 17.168 107.756 17.168V30H100.355V1.54102ZM107.756 6.41016V12.7383C108.588 12.7383 109.168 12.627 109.496 12.4043C109.836 12.1699 110.006 11.4258 110.006 10.1719V8.60742C110.006 7.70508 109.842 7.11328 109.514 6.83203C109.197 6.55078 108.611 6.41016 107.756 6.41016ZM134.668 1.54102V7.23633H130.273V30H122.873V7.23633H118.496V1.54102H134.668ZM143.756 1.54102V30H136.355V1.54102H143.756ZM162.406 10.1543H155.533V8.04492C155.533 7.06055 155.445 6.43359 155.27 6.16406C155.094 5.89453 154.801 5.75977 154.391 5.75977C153.945 5.75977 153.605 5.94141 153.371 6.30469C153.148 6.66797 153.037 7.21875 153.037 7.95703C153.037 8.90625 153.166 9.62109 153.424 10.1016C153.67 10.582 154.367 11.1621 155.516 11.8418C158.809 13.7988 160.883 15.4043 161.738 16.6582C162.594 17.9121 163.021 19.9336 163.021 22.7227C163.021 24.75 162.781 26.2441 162.301 27.2051C161.832 28.166 160.918 28.9746 159.559 29.6309C158.199 30.2754 156.617 30.5977 154.812 30.5977C152.832 30.5977 151.139 30.2227 149.732 29.4727C148.338 28.7227 147.424 27.7676 146.99 26.6074C146.557 25.4473 146.34 23.8008 146.34 21.668V19.8047H153.213V23.2676C153.213 24.334 153.307 25.0195 153.494 25.3242C153.693 25.6289 154.039 25.7812 154.531 25.7812C155.023 25.7812 155.387 25.5879 155.621 25.2012C155.867 24.8145 155.99 24.2402 155.99 23.4785C155.99 21.8027 155.762 20.707 155.305 20.1914C154.836 19.6758 153.682 18.8145 151.842 17.6074C150.002 16.3887 148.783 15.5039 148.186 14.9531C147.588 14.4023 147.09 13.6406 146.691 12.668C146.305 11.6953 146.111 10.4531 146.111 8.94141C146.111 6.76172 146.387 5.16797 146.938 4.16016C147.5 3.15234 148.402 2.36719 149.645 1.80469C150.887 1.23047 152.387 0.943359 154.145 0.943359C156.066 0.943359 157.701 1.25391 159.049 1.875C160.408 2.49609 161.305 3.28125 161.738 4.23047C162.184 5.16797 162.406 6.76758 162.406 9.0293V10.1543ZM172.76 1.54102V30H165.359V1.54102H172.76ZM192.254 1.54102V30H185.768L181.918 17.0625V30H175.73V1.54102H181.918L186.066 14.3555V1.54102H192.254ZM212.223 12.0176H204.822V9.43359C204.822 7.80469 204.752 6.78516 204.611 6.375C204.471 5.96484 204.137 5.75977 203.609 5.75977C203.152 5.75977 202.842 5.93555 202.678 6.28711C202.514 6.63867 202.432 7.54102 202.432 8.99414V22.6523C202.432 23.9297 202.514 24.7734 202.678 25.1836C202.842 25.582 203.17 25.7812 203.662 25.7812C204.201 25.7812 204.564 25.5527 204.752 25.0957C204.951 24.6387 205.051 23.748 205.051 22.4238V19.0488H203.557V14.7246H212.223V30H207.564L206.879 27.9609C206.375 28.8398 205.736 29.502 204.963 29.9473C204.201 30.3809 203.299 30.5977 202.256 30.5977C201.014 30.5977 199.848 30.2988 198.758 29.7012C197.68 29.0918 196.859 28.3418 196.297 27.4512C195.734 26.5605 195.383 25.6289 195.242 24.6562C195.102 23.6719 195.031 22.2012 195.031 20.2441V11.7891C195.031 9.07031 195.178 7.0957 195.471 5.86523C195.764 4.63477 196.602 3.50977 197.984 2.49023C199.379 1.45898 201.178 0.943359 203.381 0.943359C205.549 0.943359 207.348 1.38867 208.777 2.2793C210.207 3.16992 211.139 4.23047 211.572 5.46094C212.006 6.67969 212.223 8.45508 212.223 10.7871V12.0176Z" />
                                </svg>
                            </div>
                            <div className={`${styles['footer-elem']} address-block`}>
                                <p className={`${styles['footer-elem__title']}`}>Address.</p>
                                <address>
                                    <p className={`${styles['footer-elem__desc']}`}>
                                        31-5, Seocho-daero 58-gil,<br></br> Seocho-gu, Seoul,<br></br> Republic of Korea
                                    </p>
                                </address>
                            </div>
                            <div className={`${styles['footer-elem']} email-block`}>
                                <p className={`${styles['footer-elem__title']}`}>Email.</p>
                                <p className={`${styles['footer-elem__desc']}`}>
                                    <a href="mailto:sh.yang@miniv.kr">sh.yang@miniv.kr</a>
                                    <br></br>
                                    <a href="mailto:ky.yang@miniv.kr">ky.yang@miniv.kr</a>
                                </p>
                            </div>
                            <div className={`${styles['footer-elem']} tel-block`}>
                                <p className={`${styles['footer-elem__title']}`}>Tel.</p>
                                <p className={`${styles['footer-elem__desc']}`}>
                                    <a href="tel:+82-02-532-2475">+82 2 532 2475</a>
                                </p>
                            </div>
                            <div className={`${styles['footer-elem']} ${styles['brief-block']}`}>
                                <a href=""><p className={`${styles['footer-elem__title']}`}>Company Brief</p></a>
                            </div>
                            <div className={`${styles['copyright-block']}`}>
                                <p>ⓒ MINIVERTISING All right Reserved</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
