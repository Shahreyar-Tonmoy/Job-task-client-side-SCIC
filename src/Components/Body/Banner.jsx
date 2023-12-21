/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";


import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <Navbar />
            <div className="relative  pb-[110px] lg:pt-[60px] dark:bg-dark pt-[20px]">
                <div className="container">
                    <div className=" flex mx-10 lg:ml-32  flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content flex-col lg:mt-20 justify-start items-start">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208]  dark:text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                Task Triumph
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base  dark:text-dark-6">

                                    "Effortless Task Mastery: Your Ultimate Task Management Platform! Streamline Your Workflow, Boost Productivity, and Achieve Success with Ease. Your Tasks, Your Way – Simplified, Organized, and Always On Point!"
                                </p>
                                <ul className="flex flex-wrap items-center">
                                    <li>
                                        <Link
                                            to={"/dashboard/Home"}

                                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                                        >
                                            Let’s Explore
                                        </Link>
                                    </li>

                                </ul>
                                {/* <div className="clients pt-16">
                    <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                      Some Of Our Clients
                      <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                    </h6>
  
                    <div className="flex items-center space-x-4">
                      <SingleImage
                        href="#"
                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                      />
  
                      <SingleImage
                        href="#"
                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                      />
  
                      <SingleImage
                        href="#"
                        imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                      />
                    </div>
                  </div> */}
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src="https://i.ibb.co/DYHQ2DL/task-management-it-concept-vector-21299966-removebg-preview.png"
                                        alt="hero"
                                        className="max-w-full lg:ml-auto"
                                    />
                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                                        <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner

const SingleImage = ({ href, imgSrc }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>

        </header>
    );
};

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
                >
                    {children}
                </a>
            </li>
        </>
    );
};
