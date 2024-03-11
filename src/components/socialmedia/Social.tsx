import React from 'react'
import { motion } from 'framer-motion'
import { iconsAnimation } from './animation'
import { FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import './style.scss'
const Social: React.FC = () => {
    return (
        <>
            <section className='social'>
                <motion.div
                    className='socialmedia'
                    initial={'initialValue'}
                    animate={'inView'}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ staggerChildren: 0.3 }}
                >
                    <motion.a
                        href={`https://wa.me/${+923175104389}`}
                        target='_blank'
                        variants={iconsAnimation}
                        className='icons'
                    >
                        <FaWhatsapp />
                    </motion.a>
                    <motion.a variants={iconsAnimation} className='icons'>
                        <FiTwitter />
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/in/sohailwebdev011/'
                        target='_blank'
                        variants={iconsAnimation}
                        className='icons'
                    >
                        <FiLinkedin />
                    </motion.a>
                    <motion.a
                        href='https://github.com/sohail900'
                        target='_blank'
                        variants={iconsAnimation}
                        className='icons'
                    >
                        <FiGithub />
                    </motion.a>
                </motion.div>
            </section>
        </>
    )
}

export default Social
