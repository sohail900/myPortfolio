import React from 'react'
import { motion } from 'framer-motion'
import { aboutSecAnimation } from './animation'
import './style.scss'
const About: React.FC = () => {
    return (
        <>
            <section className='about-section' id='about'>
                <h2 className='section-container'>
                    <code>02.</code>
                    About Me
                </h2>
                <motion.div
                    initial={'initialValue'}
                    whileInView={'inView'}
                    viewport={{ once: false, amount: 0.8 }}
                    className='about-desp'
                >
                    <motion.p variants={aboutSecAnimation} className='🕳'>
                        As a passionate MERN stack web developer based in
                        Islamabad Pakistan, I specialize in crafting dynamic and
                        user-friendly web applications. With expertise in modern
                        web technologies, I excel at designing intuitive user
                        interfaces and developing robust back-end systems,
                        bringing ideas to life with precision and creativity.
                    </motion.p>
                    <motion.p variants={aboutSecAnimation}>
                        My proficiency in MongoDB, Express.js, React.js, and
                        Node.js—the MERN stack—allows me to deliver high-quality
                        solutions that meet client requirements and industry
                        standards. Fueled by curiosity and a love for coding, I
                        continuously explore new technologies to stay ahead in
                        this fast-paced digital world.
                    </motion.p>
                    <motion.button variants={aboutSecAnimation}>
                        Download CV
                    </motion.button>
                </motion.div>
            </section>
        </>
    )
}
export default About
