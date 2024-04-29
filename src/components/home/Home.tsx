import React from 'react'
import { motion } from 'framer-motion'
import { homeAni } from './animation'
import './style.scss'
const Home: React.FC = () => {
    return (
        <>
            <section className='hero_sec' id='#'>
                <motion.div
                    className='header'
                    initial={'initialValue'}
                    animate={'inView'}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ staggerChildren: 0.5 }}
                >
                    <motion.pre variants={homeAni}>
                        <code className='typography'>Hi, my name is</code>
                    </motion.pre>
                    <motion.h1 variants={homeAni}>Muhammad Sohail.</motion.h1>
                    <h1 className='header_large_text'>
                        I build things for the Web.
                    </h1>
                    <motion.p variants={homeAni}>
                        As a dedicated mern-stack{' '}
                        <span className='linear_gradient_text'>Web</span>{' '}
                        developer from Islamabad, Pakistan, I'm passionate about
                        crafting dynamic digital experiences. With expertise in
                        both front-end and back-end development, I bring
                        creativity and technical proficiency to every project.
                    </motion.p>
                </motion.div>
            </section>
        </>
    )
}

export default Home
