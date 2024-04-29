import React, { useState, useEffect } from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { itemLists } from './itemsList'
import Image from '../../components/Image/Image'
import './style.scss'
const Navbar: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState<boolean>(true)
    const [responsiveNav, setResponsiveNav] = useState<boolean>(false)
    useEffect(() => {
        let lastScrollY: number = window.pageYOffset
        const updateScrollDirection = () => {
            const scrollY: number = window.pageYOffset
            setResponsiveNav(false)
            const direction: boolean = scrollY > lastScrollY ? false : true
            if (direction !== showNavbar) {
                setShowNavbar(direction)
            }
            lastScrollY = scrollY > 0 ? scrollY : 0
        }
        window.addEventListener('scroll', updateScrollDirection) // add event listener
        return () => {
            window.removeEventListener('scroll', updateScrollDirection) // clean up
        }
    }, [showNavbar])
    return (
        <>
            <nav className={showNavbar ? 'navbar' : 'navbar hide'}>
                <div className='logo'>
                    <Image />
                </div>
                <ul className={responsiveNav ? 'shownav' : 'shownav close'}>
                    {itemLists.map((elem, index) => {
                        const { code, href, item } = elem
                        return (
                            <li key={index}>
                                <a
                                    href={href}
                                    onClick={() => {
                                        setResponsiveNav(true)
                                    }}
                                >
                                    <code>0{code}.</code>
                                    <span>{item}</span>
                                </a>
                            </li>
                        )
                    })}
                    <span
                        className='close_icon'
                        onClick={() => {
                            setResponsiveNav(false)
                        }}
                    >
                        <AiFillCloseSquare />
                    </span>
                </ul>
                <div
                    className='menu'
                    onClick={() => {
                        setResponsiveNav(true)
                    }}
                >
                    <HiMenu />
                </div>
            </nav>
        </>
    )
}

export default Navbar
