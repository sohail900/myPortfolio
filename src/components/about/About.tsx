import React from 'react'
import { motion } from 'framer-motion'
import { aboutSecAnimation, aboutImageAnimation } from './animation'
import Image from '../Image/Image'
import resumeFile from '../../assets/resume.pdf'
import './style.scss'
const About: React.FC = () => {
    function downloadHandler() {
        const element = document.createElement('a')
        element.setAttribute('href', resumeFile)
        element.setAttribute('download', 'resume.pdf')
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }
    return (
        <>
            <section className='about-section' id='about'>
                <h2 className='section-container'>
                    <code>02.</code>
                    About Me
                </h2>

                <div className='about-me-para'>
                    <motion.p
                        variants={aboutSecAnimation}
                        initial={'initialValue'}
                        whileInView={'inView'}
                        viewport={{ once: false, amount: 0.8 }}
                        className='🕳'
                    >
                        As a passionate MERN stack web developer based in
                        Islamabad Pakistan, I specialize in crafting dynamic and
                        user-friendly web applications. With expertise in modern
                        web technologies, I excel at designing intuitive user
                        interfaces and developing robust back-end systems,
                        bringing ideas to life with precision and creativity. My
                        proficiency in MongoDB, Express.js, React.js, and
                        Node.js—the MERN stack—allows me to deliver high-quality
                        solutions that meet client requirements and industry
                        standards. Fueled by curiosity and a love for coding, I
                        continuously explore new technologies to stay ahead in
                        this fast-paced digital world.
                        <button onClick={downloadHandler} className='btn_snd_1'>
                            Resume
                        </button>
                    </motion.p>
                    <motion.div
                        variants={aboutImageAnimation}
                        initial={'initialValue'}
                        whileInView={'inView'}
                        viewport={{ once: false, amount: 0.8 }}
                        className='set-image'
                    >
                        <Image />
                    </motion.div>
                </div>
            </section>
        </>
    )
}
export default About
