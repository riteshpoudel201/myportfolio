'use client';
import Image from '@/node_modules/next/image';
import Logo from '../../public/ritesh-logo-transparent.png';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare, FaInvision } from "react-icons/fa";;
import { RxHamburgerMenu } from "react-icons/rx";
import Link from '@/node_modules/next/link';
import { usePathname } from '@/node_modules/next/navigation';
import { useState } from 'react';

const Navbar = () => {
    const router = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuLink = [
        {
            name: "Home",
            page: "/",
        },
        {
            name: "Portfolio",
            page: "/portfolio",
        },
        {
            name: "Contact",
            page: "/contact",
        }

    ];

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

    return (
        <>
            <nav className='fixed h-24 w-full shadow-2xl bg-white z-10'>

                {/* navbar container starts here */}
                <div className='flex flex-row justify-between h-full w-full items-center px-4 2xl:px-16'>
                    {/* logo starts from here */}
                    <div><Image
                        src={Logo}
                        width="205"
                        height="75"
                        alt="Logo"
                        priority
                    /></div>
                    {/* logo ends here */}

                    {/* This is the nav menu start */}
                    <div className='hidden md:flex'>
                        <ul className='hidden md:flex flex-row gap-4'>
                            {menuLink.map(({ page, name }) => (
                                <li key={name} className={`${router == page ? 'text-duskblue-500' : 'hover:text-duskblue-300'} `}><Link href={page}> {name}</Link></li>
                            ))

                            }

                        </ul>
                    </div>
                    {/* Nav menu ends here */}

                    {/* social links starts here */}
                    <div className='hidden md:flex flex-row gap-2 pl-3'>
                        {
                            socialLink.map((items) => {
                                return (
                                    <Link key={items.link} target="_blank" href={items.link}>< items.social size={25} className={items.color} /></Link>
                                )
                            })
                        }

                    </div>
                    {/* social links end here */}
                    <div onClick={ handleClick } className="md:hidden"> <RxHamburgerMenu size={25}/></div>
                       
                    

                </div>
                {/* navbar container ends here */}
                
                       <div className={
                        isMenuOpen ? "fixe₫ left-0 top-0 w-full bg-slate-500 backdrop-blur-sm rounded-md":"fixed right-[-100%]"
                       }>
                        <ul className='flex flex-col mt-4 p-3 '>
                            {menuLink.map(({ page, name }) => (
                                <li key={name} className={`${router == page ? 'bg-duskblue-500 text-white' : 'hover:text-duskblue-300'} `}><Link className='w-full' href={page}> {name}</Link></li>
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