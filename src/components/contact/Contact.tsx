import React from 'react'
import { PiHandWavingBold } from 'react-icons/pi'
import { motion } from 'framer-motion'
import { reftSide } from './animation'
import './style.scss'

const Contact: React.FC = () => {
    return (
        <>
            <section className='contact_sec' id='contact'>
                <h2 className='section-container'>
                    <code>05.</code>
                    Say Hello!
                </h2>
                <motion.div
                    className='contact-section-container'
                    initial={'initialValue'}
                    whileInView={'inView'}
                    variants={reftSide}
                >
                    <h1>Get in touch!</h1>
                    <p>
                        Got a question or proposal, or just want<br></br> to say
                        hello? Go ahead.
                    </p>
                    <a
                        href='mailto:sohailbalti000@gmail.com'
                        className='btn_snd_1'
                    >
                        Say Hello
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
