import React, { useState, useEffect, useRef } from 'react';
import { Image, Carousel } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { SiLine } from 'react-icons/si';
import { Link } from 'react-router-dom'
import './page.css'
import './HomePage.css'
import './animation.css';


const HomePage = () => {
    const sloganContentRef = useRef(null);
    const aboutUsContentRef = useRef(null);
    const aboutUsPhotoRef = useRef(null);
    const teamConceptContentRef = useRef(null);
    const teamConceptPhotoRef = useRef(null);
    const talentRecruitmentContentRef = useRef(null);
    const appointmentConsultationRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 如果目標元素已經有 "visible" class，就直接跳過
                    if (entry.target.classList.contains('visible')) {
                        observer.unobserve(entry.target); // 停止觀察
                        return;
                    }

                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // 一旦元素變得可見，就停止觀察該元素
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 } // 當元素至少50%進入可視區域時觸發
        );

        // 觀察所有需要觸發動畫的元素
        if (sloganContentRef.current) {
            observer.observe(sloganContentRef.current);
        }
        if (aboutUsContentRef.current) {
            observer.observe(aboutUsContentRef.current);
        }
        if (aboutUsPhotoRef.current) {
            observer.observe(aboutUsPhotoRef.current);
        }
        if (teamConceptContentRef.current) {
            observer.observe(teamConceptContentRef.current);
        }
        if (teamConceptPhotoRef.current) {
            observer.observe(teamConceptPhotoRef.current);
        }
        if (talentRecruitmentContentRef.current) {
            observer.observe(talentRecruitmentContentRef.current);
        }
        if (appointmentConsultationRef.current) {
            observer.observe(appointmentConsultationRef.current);
        }

        return () => {
            observer.disconnect(); // 組件卸載時清理觀察器
        };
    }, []);

    return (
        <div>
            <div className='slogan' >
                <div className='sloganContent' ref={sloganContentRef}>
                    <h1 style={{ fontSize: '50px' }}>創新啟動  兔躍未來</h1>
                    <h2 style={{ color: '#FF8000', fontSize: '32px' }}>Innovate Today Leap Beyond Tomorrow</h2>
                    <p>用科技賦能傳統  創造產業新價值</p>
                    <Link to="/services">
                        <button>了解更多</button>
                    </Link>
                </div>
            </div>
            <div className='CompanyContent'>
                <div className='AboutUs'>
                    <div className='AboutUsContent' ref={aboutUsContentRef}>
                        <h1 style={{ color: '#FF8000' }}>About us</h1>
                        <div className='SecondTitle'>
                            <h1>關於我們</h1>
                            <h3>用創新科技  實現產業蛻變</h3>
                        </div>
                        <p style={{ paddingLeft: "20px" }}>創客兔科技深耕產業數位轉型，我們深知傳統產業的珍貴價值與豐富經驗。透過創新科技的導入，
                            我們協助企業保留既有優勢，同時開創嶄新商機。讓每一次的轉型，都能帶來實質的營運提升。</p>
                    </div>
                    <div className='AboutUsContentPhoto' ref={aboutUsPhotoRef}>
                        <Image
                            width={500}
                            className="photo-shadow1"
                            src="https://image-cdn.learnin.tw/bnextmedia/image/shutterstock/2016-08/img-1472814967-73958.jpg?w=900&output=webp"
                        />
                    </div>
                </div>
                <div className='TeamConcept'>
                    <div className='TeamConceptContent' ref={teamConceptContentRef}>
                        <h1 style={{ color: '#FF8000' }}>Team Concept</h1>
                        <div className='SecondTitle'>
                            <h1>團隊理念</h1>
                            <h3>傳產數位轉型</h3>
                        </div>
                        <div className='TeamConceptText'>
                            <p>MakerRabbit 深信，每個人都有獨特的需求與挑戰。我們的使命是深入了解大眾的需求，提供多元且客製化的服務。
                                不論您是渴望學習的新手學生、技術精湛的工程師，或是尋求解決方案的發案者，我們都以解決您的需求為首要目標。</p>
                            <p> 我們相信，透過良好的溝通與交流，能夠實現教學相長的理念。在合作的過程中，彼此分享知識與經驗，不僅解決當前的問題，更能共同提升能力與專業水平。</p>
                        </div>
                    </div>
                    <div className='TeamConceptPhoto' ref={teamConceptPhotoRef}>
                        <img
                            src={require("./images/3.png")}
                            style={{
                                width: '100%',
                                height: '450px',
                                objectFit: 'contain', // 使用 contain 而不是 cover
                                maxWidth: '100%',
                                objectPosition: 'center',
                                display: 'block' // 確保圖片不會被其他元素影響
                            }}
                            alt="Team Concept"
                        />
                    </div>
                </div>
            </div>
            <div className='TalentRecruitment'>
                <div className='TalentRecruitmentContent' ref={talentRecruitmentContentRef}>
                    <h1 style={{ color: '#FF8000', fontSize: '40px' }}>人才招募</h1>
                    <h3>竭誠歡迎，與我們相同理念並懷抱夢想、熱情的人才加入</h3>
                    <button><a href="https://docs.google.com/forms/d/e/1FAIpQLScS50Dj_yZTUXervVzMj_aFZ7u-A-5X9GZE_jjogktkMU0XoQ/viewform?usp=header" target="_blank">了解更多</a></button>
                </div>
            </div>
            <div className='AppointmentConsultation' ref={appointmentConsultationRef}>
                <h1 >想了解如何為您的企業開創新局面？</h1>
                <p>免費諮詢、客製化解決方案評估、產業轉型策略建議</p>
                <Link to="/contact" onClick={() => {
                    setTimeout(() => {
                        const element = document.getElementById('consultation-form');
                        if (element) {
                            const offset = element.offsetTop - 100; // 調整這個數值來控制位置
                            window.scrollTo({ top: offset, behavior: 'smooth' });
                        }
                    }, 100);
                }}>
                    <button>立即預約諮詢</button>
                </Link>
            </div>
            <footer className='copyright'>
                <div className='copyright'>
                    Copyright © 2025 MakerRabbit Tech 創客兔科技有限公司 著作權所有。All Rights Reserved.
                    <div className='social-media'>
                        <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/YourPage" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined className="social-icon" />
                        </a>
                        <a href="https://line.me/YourPage" target="_blank" rel="noopener noreferrer">
                            <SiLine className="social-icon" />
                        </a>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default HomePage;