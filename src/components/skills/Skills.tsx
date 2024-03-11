import { FC } from 'react'
import Frontend from './frontend'
import Backend from './backend'
import { frontend_data, backend_data } from '../../constant/skills'
import './style.scss'
const Skills: FC = () => {
    return (
        <>
            <section className='skills_sec' id='skills'>
                <h2 className='section-container'>
                    <code>03.</code>
                    Skills
                </h2>
                <div className='skills_hero_sec'>
                    <div className='skills'>
                        <code>Frontend</code>
                        <div className='skills_flex'>
                            {frontend_data.map((val, idx) => {
                                const { name, icon } = val
                                return (
                                    <>
                                        <Frontend name={name} icon={icon} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className='skills'>
                        <code>Backend</code>
                        <div className='skills_flex'>
                            {backend_data.map((val, idx) => {
                                const { name, icon } = val
                                return (
                                    <>
                                        <Backend name={name} icon={icon} />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills
