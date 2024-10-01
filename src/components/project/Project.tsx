import { FC } from 'react'
import { motion } from 'framer-motion'
import { cardAnimation } from './animate'
import Children from './children'
import { allProjects } from '../../constant/projects'
import './style.scss'

const Project: FC = () => {
    return (
        <>
            <section className='projects_sec' id='projects'>
                <h2 className='section-container'>
                    <code>04.</code>
                    Portfolio
                </h2>
                <div className='flex'>
                    {allProjects?.map((values, idx) => {
                        return (
                            <>
                                <motion.div
                                    variants={cardAnimation}
                                    initial={'initialValue'}
                                    whileInView={'inView'}
                                    viewport={{ once: false, amount: 0.5 }}
                                    className='all_projects'
                                    key={values.id}
                                >
                                    <div className='card_content'>
                                        <Children values={values} />
                                    </div>
                                </motion.div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Project
