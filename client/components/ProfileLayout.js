"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProfileLayout({ profile }) {
    const [activeTab, setActiveTab] = useState("case");
    const videoSectionRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const scrollToVideo = () => {
        videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            <header className="w-full max-w-[1700px] px-6 md:px-60 pt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
                        <div className="flex items-center gap-6">
                            <img src="/images/prme.png" alt="PRME" className="h-20 md:h-16 w-auto" />
                            <img src="/images/aacsb.png" alt="AACSB" className="h-25 md:h-16 w-auto" />
                        </div>
                    </div>

                    <div className="flex justify-center sm:justify-end">
                        <Link
                            href="/"
                            className="text-[#f47b2a] text-[15px] font-medium border border-[#f47b2a] px-4 py-2 rounded-full hover:bg-[#f47b2a] hover:text-white transition-all"
                        >
                            ← Back to Profiles
                        </Link>
                    </div>
                </div>
            </header>

            <div className="w-full bg-gradient-to-r from-[#f47b2a] to-[#ea4d2d] mt-6 md:mt-8 relative text-white">
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1500px] mx-auto px-6 md:px-10 pt-20 pb-20 md:pt-24 md:pb-24">
                    <div className="flex flex-row gap-6 items-center mb-6 md:mb-0">
                        <div className="flex items-center gap-2 text-[15px] md:text-[17px] cursor-pointer">
                            <img src="/images/email-icon.png" alt="Email" className="h-5 w-5 md:h-6 md:w-6" />
                            <p>Email</p>
                        </div>
                        <div className="flex items-center gap-2 text-[15px] md:text-[17px] cursor-pointer">
                            <img src="/images/phone-icon.png" alt="Phone" className="h-5 w-5 md:h-6 md:w-6" />
                            <p>Phone</p>
                        </div>
                    </div>

                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 border border-white rounded-full text-white text-[15px] md:text-[16px] hover:bg-white hover:text-[#f47b2a] transition-all"
                    >
                        <img src="/images/download-icon.png" alt="Download" className="h-5 w-5" />
                        <span>Download My Resume</span>
                    </a>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-100px] md:bottom-[-150px]">
                    <div className="rounded-full border-[6px] border-white bg-white flex items-center justify-center w-[150px] h-[150px] md:w-[330px] md:h-[330px]">
                        <div className="rounded-full overflow-hidden w-[135px] h-[135px] md:w-[310px] md:h-[310px] shadow-sm">
                            <img
                                src={profile.image}
                                alt={profile.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[130px] md:mt-[160px] text-center px-6" data-aos="fade-up">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#111]">{profile.name}</h1>
                <p className="text-gray-600 text-[16px] md:text-[18px] mt-2">
                    {profile.gender} | {profile.age} | {profile.pronouns}
                </p>
            </div>

            <div className="mt-8 md:mt-10" data-aos="zoom-in">
                <button 
                    onClick={scrollToVideo}
                    className="bg-[#f47b2a] text-white px-2 py-1 rounded-full text-[15px] w-73 cursor-pointer font-medium shadow-md hover:scale-105 transition-all flex items-center gap-3"
                >
                    <img src="/images/play-icon.png" alt="Play" className="h-10 w-10 md:h-11 md:w-11" />
                    <span>Watch my Visual Resume Now</span>
                </button>
            </div>

            <div className="mt-16 md:mt-18 w-full max-w-[1250px] px-5">
                <div className="border border-gray-200 rounded-[20px] p-4 w-full flex flex-wrap justify-center text-center shadow-sm gap-y-4 gap-x-8 md:gap-x-12">
                    <div className="font-semibold text-gray-600 text-sm md:text-base">Core Skills & Technical <br /> Proficiencies</div>
                    <div className="font-semibold text-gray-600 text-sm md:text-base">Professional Journey & <br /> Internship Roles</div>
                    <div className="font-semibold text-gray-600 text-sm md:text-base">Case Insights & Key <br /> Projects</div>
                    <div className="font-semibold text-gray-600 text-sm md:text-base">Learning & Academic <br /> Milestones</div>
                    <div className="font-semibold text-gray-600 text-sm md:text-base">Endorsements from <br /> Mentors & Peers</div>
                </div>
            </div>

            <div className="max-w-[1300px] text-gray-700 text-center leading-relaxed text-base md:text-xl px-6 md:px-12 py-10 md:py-14">
                {profile.bio1}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-16 mt-10 md:mt-16 max-w-[1700px] px-10">
                <img src="/images/photoshop-logo.png" alt="Photoshop" className="h-24 md:h-30 opacity-75" />
                <img src="/images/js-logo.png" alt="JS" className="h-20 md:h-26 opacity-75" />
                <img src="/images/html5-logo.png" alt="HTML" className="h-16 md:h-24 opacity-75" />
                <img src="/images/css-logo.png" alt="CSS" className="h-16 md:h-30 opacity-75" />
                <img src="/images/python-logo.png" alt="Python" className="h-16 md:h-28 opacity-75" />
                <img src="/images/excel-logo.png" alt="Excel" className="h-16 md:h-24 opacity-75" />
                <img src="/images/word-logo.png" alt="Word" className="h-16 md:h-24 opacity-75" />
                <img src="/images/powerpoint-logo.png" alt="PowerPoint" className="h-16 md:h-24 opacity-75" />
            </div>

            <div className="mt-16 md:mt-20 w-full max-w-[1390px] px-6 relative">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                    <h2 className="text-[24px] md:text-[50px] font-bold leading-tight">
                        Case Insights & <br className="hidden md:block" /> Key Projects
                    </h2>

                    <div className="relative flex items-center border border-gray-200 rounded-full p-1 bg-white shadow-sm">
                        <button
                            onClick={() => setActiveTab("case")}
                            className={`px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${activeTab === "case"
                                    ? "bg-gray-200 text-gray-700 shadow-inner"
                                    : "text-gray-500"
                                }`}
                        >
                            Case Studies
                        </button>
                        <button
                            onClick={() => setActiveTab("projects")}
                            className={`px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${activeTab === "projects"
                                    ? "bg-gray-200 text-gray-700 shadow-inner"
                                    : "text-gray-500"
                                }`}
                        >
                            Projects
                        </button>
                    </div>
                </div>

                <div className="pb-8">
                    {activeTab === "case" ? (
                        <CarouselSlider>
                            <CaseCard img="/images/ondc.png" title="ONDC Case Study" />
                            <CaseCard img="/images/jjm.png" title="Jal Jeevan Mission Case Study" />
                            <CaseCard img="/images/finance.png" title="FinEasy Case Study" />
                            <CaseCard img="/images/sustainability.jpg" title="Sustainability Report Analysis" />
                        </CarouselSlider>
                    ) : (
                        <CarouselSlider>
                            <CaseCard img="/images/app.webp" title="Mobile App Design" />
                            <CaseCard img="/images/website.webp" title="Portfolio Website" />
                            <CaseCard img="/images/data.png" title="Data Dashboard" />
                            <CaseCard img="/images/ecommerce.jpeg" title="E-commerce Platform Integration" />
                        </CarouselSlider>
                    )}
                </div>
            </div>

            <section ref={videoSectionRef} className="mt-24 w-full max-w-[1300px] px-6 text-center mx-auto">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#111] mb-8">Visual Resume</h2>

                <div className="rounded-[25px] overflow-hidden shadow-md relative bg-black">
                    <img
                        src="/images/video-thumbnail.png"
                        alt="Video Thumbnail"
                        className="w-full h-[500px] object-cover"
                    />

                    <div className="absolute bottom-5 left-10 flex items-center gap-2 text-white opacity-90">
                        <img src="/images/youtube.png" alt="YouTube" className="h-18" />
                    </div>

                    <div className="absolute bottom-5 right-5 md:right-10 flex flex-col sm:flex-row items-center gap-4">
                        <button
                            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold cursor-pointer border-2 border-white hover:scale-105 transition-transform"
                        >
                            ||
                        </button>

                        <button className="px-6 py-3 border cursor-pointer border-1 border-white rounded-full text-white text-sm font-bold hover:bg-white hover:text-[#f47b2a] transition">
                            Watch the Full Video
                        </button>
                    </div>
                </div>
            </section>

            <div className="w-full bg-[#F2F2F2] pt-24 md:pt-36 mt-24 pb-12">
                <footer className="bg-gradient-to-r from-[#f47b2a] to-[#ea4d2d] text-white text-center py-12 md:py-14 rounded-[40px] mx-4 md:mx-8">
                <h2 className="text-[22px] md:text-[26px] font-semibold mb-4 md:mb-6">
                    Connect with {profile.name}
                </h2>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-white text-[#f47b2a] px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium inline-flex items-center gap-2"
                >
                    <img src="/images/download-icon2.png" alt="Download" className="h-6 w-6 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base">Download My Resume</span>
                </a>

            </footer>

                <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6 text-gray-600 px-8 sm:px-16 md:px-40">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-xs md:text-sm cursor-pointer hover:text-[#f47b2a] transition">
                            <img src="/images/email-icon2.png" alt="Email" className="h-3 w-3" /> <span>Email</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm cursor-pointer hover:text-[#f47b2a] transition">
                            <img src="/images/phone-icon2.png" alt="Phone" className="h-3 w-3" /> <span>Phone</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={profile.githubUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs md:text-sm px-3 py-1.5 border border-gray-300 rounded-full hover:bg-gray-100 hover:text-[#f47b2a] transition"
                        >
                            <img src="/images/github-icon.png" alt="GitHub" className="h-4 w-4" /> <span>GitHub</span>
                        </a>
                        <a
                            href={profile.linkedinUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs md:text-sm px-3 py-1.5 border border-gray-300 rounded-full hover:bg-gray-100 hover:text-[#f47b2a] transition"
                        >
                            <img src="/images/linkedin-icon.png" alt="LinkedIn" className="h-3 w-3" /> <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                <div className="px-8 sm:px-16 md:px-40 mt-8">
                    <hr className="w-full h-px bg-gray-300 border-0" />
                </div>

                <p className="text-sm mt-6 text-gray-500 text-center">® 2024 MAHE B'LRU</p>
            </div>
        </div>
    );
}

function CarouselSlider({ children }) {
    const sliderRef = useRef(null);

    const NextArrow = ({ onClick }) => (
        <button
            className="absolute -bottom-14 right-0 bg-[#f4f4f6] text-gray-500 rounded-full cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-[#f47b2a] hover:text-white transition-all"
            onClick={onClick}
        >
            <span className="text-xl font-semibold">{'›'}</span>
        </button>
    );

    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute -bottom-14 right-12 bg-[#f4f4f6] text-gray-500 rounded-full cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-[#f47b2a] hover:text-white transition-all"
            onClick={onClick}
        >
            <span className="text-xl font-semibold">{'‹'}</span>
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
        appendDots: (dots) => (
            <div className="absolute -bottom-12 left-0">
                <ul className="m-0 p-0 flex gap-2">{dots}</ul>
            </div>
        ),
    };

    return (
        <div className="relative pb-16">
            <Slider ref={sliderRef} {...settings}>{children}</Slider>
        </div>
    );
}

function CaseCard({ img, title }) {
    return (
        <div className="text-center mx-2 my-2">
            <div className="rounded-[20px] overflow-hidden bg-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-[260px] object-cover"
                />
            </div>
            <h3 className="text-[22px] font-semibold pt-4">{title}</h3>
        </div>
    );
}
