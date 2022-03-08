
import React from 'react';
import './Home.scss';
import logo from 'resources/logoHome.svg'
import Animation from 'shared/Animation/Animation';
import Button from 'shared/Button/Button';
import arrow from 'resources/arrow.svg'
import brand1 from 'resources/Clients/IDML- Brands logos-01.png'
import brand2 from 'resources/Clients/IDML- Brands logos-05.png'
import brand3 from 'resources/Clients/IDML- Brands logos-06.png'
import brand4 from 'resources/Clients/IDML- Brands logos-09.png'
import brand5 from 'resources/Clients/IDML- Brands logos-10.png'
import brand6 from 'resources/Clients/IDML- Brands logos-28.png'
import brand7 from 'resources/Clients/IDML- Brands logos-29.png'

import imgNews from 'resources/Images/lightbulb.jpeg'
import imgNews2 from 'resources/Images/lightbulb2.png'
import imgNews3 from 'resources/Images/invent-sign.png'

import play from 'resources/fi-rr-play-alt.svg'

import imgVideo1 from 'resources/Images/hand.jpg'
import imgVideo2 from 'resources/Images/skylights-wide.jpg'
import imgVideo3 from 'resources/Images/blue-light.jpg'



import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({

}));

const Home = () => {
    const classes = useStyles();
    const clients = [
        {
            src:brand1,
        },
        {
            src:brand2,
        },
        {
            src:brand3
        },
        {
            src:brand4
        },
        {
            src:brand5
        },
        {
            src:brand6
        },
        {
            src:brand7
        }
    ]

    const news = [
        {
            title:'title here',
            date:'21 dec 2021',
            src:imgNews,
            content:'IDML Group is committed to delivering the best possible service through its different channels located worldwide.'
        },
        {
            title:'title here',
            date:'21 dec 2021',
            src:imgNews2,
            content:'IDML Group is committed to delivering the best possible service through its different channels located worldwide.'
        },
        {
            title:'title here',
            date:'21 dec 2021',
            src:imgNews3,
            content:'IDML Group is committed to delivering the best possible service through its different channels located worldwide.'
        },
    ]

    const business = [
        imgVideo1, imgVideo2, imgVideo3
    ]
    return (
        <div className="home-container">
            <div className="book">
                <p>Book a consultation</p>
            </div>

            <div className="section1">
                <div className="blue-layer"></div>
                <div className="content">
                    <img src={logo} alt="logo" className="home-logo" />
                    <Animation className="animation"/>
                </div>
                <Button text='book a consultation' color="white" />
                <img src={arrow} alt="arrow" className="arrow" />
            </div>
            <div className="section2">
                <svg  className="pattern" xmlns="http://www.w3.org/2000/svg" width="1022.759" height="1020.341" viewBox="0 0 1022.759 1020.341">
                <g id="Group_3340" data-name="Group 3340" opacity="0.149">
                    <path id="Path_15" data-name="Path 15" d="M634.93,387.17Z" transform="translate(-320.623 133.119)" fill="#74756f"/>
                    <path id="Path_21" data-name="Path 21" d="M680.24,233.58Z" transform="translate(-498.042 -160.522)" fill="#74756f"/>
                    <path id="Path_24" data-name="Path 24" d="M386.81,321.178l29.934,56.956L446.5,434.567l30.574,58.062,30.457,58.033,31.74,60.363,33.137,62.983,35.146,66.973L737.223,987.468l-35.262,64.5L583.943,827.753,539.536,743.31l-37.473-71.2-34.944-66.361L434.448,543.7l-32.176-61.148-31.012-58.878-31.039-58.79Q362.583,341.824,386.81,321.178Zm892.1-112.688-1.281,2.446-3.493-2.446Z" transform="translate(-256.154 -208.49)" fill="#74756f"/>
                    <path id="Path_25" data-name="Path 25" d="M552.85,252.146l29.587,55.819,12.752,24.081,16.192,30.545,13.74,25.945,15.9,30.079,29.124,55.325,29.84,56.343L730.446,587.5l30.721,58,127.683,241.1,36.135-65.342L808.337,601.13l-28.855-54.451-28.8-54.306-28.974-54.656-28.8-54.363-9.293-17.472-19.854-37.534L653.455,308.9l-14.908-28.129-3.233-6.114-26.729-50.4a590.042,590.042,0,0,0-54.542,27.08h-.172Z" transform="translate(-371.673 -178.36)" fill="#74756f"/>
                    <path id="Path_26" data-name="Path 26" d="M444.19,388.222l34.563,65.488,34.941,66.39,37.857,71.924,41.288,78.329,49.3,93.469L713.186,898.64l98.51,186.65,32.028,60.566h70.352l1.864-3.552,30.748-58.5L1239.3,526.826l32.526-61.906,8.126-15.491,24.4-46.589,9.552-18.17V251.89l-14.3,27.168-5.5,10.482-14.15,26.877-12.9,24.547-32.555,61.877-32.613,61.935-32.556,61.907L885.86,1065.374l-7.863,15-17.791-33.835L775.239,884.751,706.924,754.709l-46.908-89.016-39.864-75.911L584.278,521.44l-34.534-65.692-32.7-62.284-32.467-61.673Q463.233,358.7,444.19,388.222Z" transform="translate(-444.19 -125.516)" fill="#74756f"/>
                </g>
                </svg>
                <h2 className="title">What we do</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="section3">
                <h2 className="title">Our process</h2>
                <div>
                    <p className="round-blue-title">Consultancy</p>
                    <p className="round-blue-title">Execution</p>
                    <p className="round-blue-title">Partnership</p>
                </div>
            </div>
            <div className="section4">
                <h2 className="title">About us</h2>
                <p className="paragraph">IDML Group is a multidisciplinary business specialized in FMCG and Tobacco industries. A highly diversified group operating in many countries focusing on ACE (Advanced Consumer Experiences). From consultancy to investment and international distribution, IDML (Invent, Develop, Manufacture and Launch) assists small to big companies to enter new markets.</p>
                <Button text='learn more' className="about-button" color="blue" />
            </div>
            <div className="section5">
                <p className="white-text">“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.”</p>
            </div>
            <div className="section6">
                <div className="title-container">
                    <div></div>
                    <h2 className="title">Our clients</h2>
                    <p className="mb-0 blue-upper">View all</p>
                </div>
                <div className="client-slider">
                    {clients.map((e,idx)=>(
                        <div className="client-square" key={idx}>
                            <div className="client-layer">
                                <p className="white-title mb-2">TITLE HERE</p>
                                <p className="white-subtitle">Industry info</p>
                            </div>
                            <img src={e.src} alt="client logo" />
                        </div>
                    ))}
                </div>
                <div className="client-buttons">
                    <span className="circle-blue"></span>
                    <span className="circle-blue"></span>
                    <span className="oval-blue"></span>
                    <span className="circle-blue"></span>
                    <span className="circle-blue"></span>
                </div>
            </div>
            <div className="section7 section3">
                <h2 className="title">Industries</h2>
                <div>
                    <p className="round-lightblue-title">Tobacco</p>
                    <p className="round-lightblue-title">FMCG</p>
                    <p className="round-lightblue-title">Consultancy</p>
                </div>
            </div>
            <div className="section8">
                <h2 className="title">News</h2>
                <div className="news-container">
                    {news.map((e, idx)=>(
                        <div className="news-box" key={idx}>
                            <img src={e.src} alt="news" />
                            <div className="news-text-container">
                                <div className="news-title-container mb-2">
                                    <p className="white-title">{e.title}</p>
                                    <p className="white-subtitle2 mx-3">{e.date}</p>
                                </div>
                                <div className="news-content">
                                    <p className="white-subtitle ">{e.content}
                                        <br />
                                        <span>Read more</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <Button color="blue" text="view all" />
                
            </div>
            <div className="section9">
            <div className="title-container">
                    <div></div>
                    <h2 className="title">Business tips</h2>
                    <p className="mb-0 blue-upper">View all</p>
                </div>
                <p className="blue-text">
                Subscribe to our YouTube channel  to stay up-to-date with the latest business trends. 
                </p>
                <div className="video-container">
                    {business.map((e,idx)=>(
                        <div className="video-subcontainer" key={idx}>
                            <div className="video-square" >
                                <img src={e} alt="video" />
                                <div className="white-layer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47px" height="47px" viewBox="0 0 115 115">
                                        <path id="fi-rr-play-alt" d="M91.042,115H23.958A23.987,23.987,0,0,1,0,91.042V23.958A23.987,23.987,0,0,1,23.958,0H91.042A23.987,23.987,0,0,1,115,23.958V91.042A23.987,23.987,0,0,1,91.042,115ZM23.958,9.583A14.375,14.375,0,0,0,9.583,23.958V91.042a14.375,14.375,0,0,0,14.375,14.375H91.042a14.375,14.375,0,0,0,14.375-14.375V23.958A14.375,14.375,0,0,0,91.042,9.583Zm20.805,71.9a11.346,11.346,0,0,1-5.683-1.548A11.083,11.083,0,0,1,33.5,70.251v-25.5a11.2,11.2,0,0,1,16.771-9.722l25.29,12.626A11.193,11.193,0,0,1,75.8,67.222L50.039,80.1A10.541,10.541,0,0,1,44.764,81.482Zm-.12-38.333a1.5,1.5,0,0,0-.752.2,1.567,1.567,0,0,0-.8,1.4v25.5a1.615,1.615,0,0,0,2.4,1.4l25.76-12.88a1.5,1.5,0,0,0,.575-1.275,1.557,1.557,0,0,0-.81-1.4L45.736,43.475a2.214,2.214,0,0,0-1.092-.326Z" fill="#14334a" />
                                    </svg> 
                                </div>
                            </div>
                            <div className="video-text">
                                <p className="blue-subtitle2 mb-2">  21 dec 2021</p>
                                <p className="blue-text w-100">
                                IDML Group is committed to delivering the best possible service.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                    <Button text='subscribe' color="blue" />

            </div>
            <div className="section10">
                <p className="title" style={{fontWeight:'bold'}}>Need help with your busienss?</p>
                <p className="blue-text mb-4">Book your 15 mins free consultation now! </p>
                <Button text='book a consultation' color="blue" />
            </div>
        </div>
    );
}

export default Home;
