import React from 'react'
import { PiHandWavingBold } from 'react-icons/pi'
import { motion } from 'framer-motion'
import './style.scss'
import { reftSide } from './animation'

const Contact: React.FC = () => {
    return (
        <>
            <section className='contact_sec' id='contact'>
                <h2 className='section-container'>
                    <code>05.</code>
                    Say hello
                </h2>
                <motion.div
                    className='contact-section-container'
                    initial={'initialValue'}
                    whileInView={'inView'}
                    variants={reftSide}
                >
                    <h1>Get In Touch</h1>
                    <p>
                        Have a project in mind or just want to say hello? I'm
                        all ears! Let's grab a virtual coffee and brainstorm how
                        we can make your digital dreams a reality. Don't
                        hesitate to reach out – I'm here to turn your ideas into
                        stunning web experiences
                    </p>
                    <a href='mailto:your-email@example.com'>
                        Say hello{' '}
                        <span>
                            <PiHandWavingBold />
                        </span>
                    </a>
                </motion.div>
            </section>
        </>
    )
}

export default Contact
