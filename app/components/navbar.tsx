/* eslint-disable react/jsx-key */
'use client';
import LogoDynamic from './logo';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare, FaInvision } from "react-icons/fa";;
import { RxHamburgerMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { BsInfoSquare } from "react-icons/bs";
import Link from '@/node_modules/next/link';
import { usePathname } from '@/node_modules/next/navigation';
import { useState, useEffect } from 'react';


const Navbar = () => {
    const router = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScroll, setScroll] = useState(false);

    //array for populating navigation menu
    const menuLink = [
        {
            name: "Home",
            page: "/",
            icons:<IoHomeOutline/>
        },
        {
            name: "Portfolio",
            page: "/portfolio",
            icons:<AiOutlineFileText/>
        },
        {
            name: "Contact",
            page: "/contact",
            icons:<BsInfoSquare/>
        }

    ];

    //array for populating social links
    const socialLink = [
        {
            social: FaSquareFacebook,
            link: "https://www.facebook.com/ritesh.poudel.33/",
            color: "text-blue-800",
        },
        {
            social: FaGithubSquare,
            link: "https://github.com/riteshpoudel201",
            color: "text-black",
        },
        {
            social: FaInvision,
            link: "https://www.linkedin.com/in/ritesh-poudel-12b950188/",
            color: "text-blue-500",
        }
    ];



    const handleClick = () => {
        setMenuOpen(!isMenuOpen);
    }

    useEffect(
        () => {
            const handleScroll = () => {
               setScroll(window.scrollY > 0);
            };
            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll',handleScroll);
        },[]
    );

    return (
        <>
            {/* <nav className={`${ isScroll ? 'fixed top-0 z-50' : '' } h-24 w-full bg-white`} > */}
            <nav className='sticky top-0 z-50 h-24 w-full bg-white' >

                {/* navbar container starts here */}
                <div className='flex flex-row justify-between h-full w-full items-center px-4  2xl:px-16'>
                    {/* logo starts from here */}
                    <div className='flex justify-center align-middle border-1 border-solid border-white'>
                        <Link href='/'><LogoDynamic /></Link>
                    </div>
                    {/* logo ends here */}

                    {/* This is the nav menu start */}
                    <div className='hidden md:flex'>
                        <ul className='hidden md:flex flex-row gap-4'>
                            {
                                menuLink.map(
                                    (items) => {
                                        
                                        return (
                                            <li key={items.name} className={`${router == items.page ? 'text-duskblue-500' : 'hover:text-duskblue-300 '} `}><Link  href={items.page} className='flex flex-row items-center gap-1'>{items.icons} {items.name}</Link></li>
                                             )
                                        }
                                   

                                )
                            }

                        </ul>
                    </div>
                    {/* Nav menu ends here */}

                    {/* social links starts here */}
                    <div className='hidden md:flex flex-row gap-2 pl-3'>
                        {
                            socialLink.map((items) => {
                                return (
                                    <Link key={items.link} target="_blank" href={items.link}>< items.social size={25} className={`${items.color} `} /></Link>
                                )
                            })
                        }

                    </div>
                    {/* social links end here */}
                    <div onClick={handleClick} className="md:hidden pr-13"> <RxHamburgerMenu size={25} /></div>



                </div>
                {/* navbar container ends here */}

                <div className={
                    isMenuOpen ? "md:hidden fixe₫ right-0 top-25 w-[250px] bg-slate-500 rounded-md absolute z-50" : "fixed right-[-100%]"
                }>
                    <ul className='flex flex-col mt-4 p-3 '>
                        {menuLink.map(({ page, name,icons }) => (
                            <li key={name} className={`${router == page ? 'bg-duskblue-500 text-white' : 'hover:text-duskblue-300'} `}><Link onClick={(e) => setMenuOpen(false)} onScroll={ (e) => setMenuOpen(false)} className='w-full flex flex-row items-center gap-1' href={page}>{icons} {name}</Link></li>
                        ))

                        }

                    </ul>

                    <div className='flex flex-row gap-2 pl-3 mt-5 pb-2'>
                        {
                            socialLink.map((items) => {
                                return (
                                    <Link key={items.link} target="_blank" href={items.link}>< items.social size={25} className={items.color} /></Link>
                                )
                            })
                        }

                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar